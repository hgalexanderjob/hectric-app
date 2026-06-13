import fs from 'fs/promises';
import path from 'path';

const series = process.argv[2] || "alba";
const SERIE_DIR = path.join(process.cwd(), "src", "data", "raw_catalogs", "niessen", series);
const OUT_DIR = path.join(process.cwd(), "src", "data", "knowledge_base", "niessen", series);

const fileToHectorId: Record<string, string[]> = {
  "bases-de-enchufe.txt": ["enchufe-schuko"],
  "cargadores-usb.txt": ["cargador-usb"],
  "combinaciones.txt": ["combinaciones"],
  "interruptores-conmutadores-cruzamientos.txt": ["interruptor", "conmutador"],
  "pulsador-de-persianas.txt": ["persianas"],
  "pulsadores-timbres.txt": ["pulsador", "timbre-zumbador"],
  "reguladores-electr\\u00f3nicos-giratorios.txt": ["regulador"],
  "reguladores-electrónicos-giratorios.txt": ["regulador"], // Handling encoding issues
  "tomas-de-televisi\\u00f3n.txt": ["toma-tv"],
  "tomas-de-televisión.txt": ["toma-tv"],
  "tomas-de-tel\\u00e9fono.txt": ["toma-telefono"],
  "tomas-de-teléfono.txt": ["toma-telefono"],
  "tomas-inform\\u00e1ticas.txt": ["toma-datos"],
  "tomas-informáticas.txt": ["toma-datos"],
};

// Words to determine which specific Hector ID inside a file (e.g. conmutador vs interruptor)
const hectorIdKeywords: Record<string, string[]> = {
  "interruptor": ["interruptor", "bipolar", "monopolar"],
  "conmutador": ["conmutador", "cruzamiento"],
  "pulsador": ["pulsador"],
  "timbre-zumbador": ["timbre", "zumbador"],
  "enchufe-schuko": ["schuko", "enchufe", "base"],
  "cargador-usb": ["usb"],
  "combinaciones": ["doble"],
  "persianas": ["persianas"],
  "regulador": ["regulador"],
  "toma-tv": ["tv", "televisión", "r-tv"],
  "toma-telefono": ["teléfono", "rj12", "rj11"],
  "toma-datos": ["informática", "rj45", "vdi"],
};

async function main() {
  const files = await fs.readdir(SERIE_DIR);

  const results: Record<string, any[]> = {}; // hectorId -> skus array

  for (const file of files) {
    if (!file.endsWith(".txt") || file.includes("tabla-de-")) continue;

    let possibleIds: string[] = [];
    for (const [key, ids] of Object.entries(fileToHectorId)) {
      if (file.toLowerCase() === key.toLowerCase() || file === key) {
        possibleIds = ids;
        break;
      }
    }

    if (possibleIds.length === 0) {
      console.log(`Unmapped file: ${file}`);
      continue;
    }

    console.log(`Processing ${file}... possible IDs: ${possibleIds.join(", ")}`);

    const content = await fs.readFile(path.join(SERIE_DIR, file), "utf-8");
    const blocks = content.split(/\n\s*\n/).map(b => b.trim()).filter(b => b.length > 0);

    for (const block of blocks) {
      const lines = block.split('\n').map(l => l.trim());
      const name = lines[0];
      
      let skuLine = lines.find(l => l.toLowerCase().startsWith("código:"));
      if (!skuLine) skuLine = lines.find(l => l.toLowerCase().startsWith("codigo:"));
      if (!skuLine) {
        console.log(`  No SKU found for block starting with: ${name}`);
        continue;
      }
      
      const sku = skuLine.split(":")[1].trim();
      
      // Determine target ID
      let targetId = possibleIds[0];
      if (possibleIds.length > 1) {
        for (const pid of possibleIds) {
          const keywords = hectorIdKeywords[pid];
          if (keywords && keywords.some(kw => name.toLowerCase().includes(kw))) {
            targetId = pid;
            break;
          }
        }
      }

      if (!results[targetId]) results[targetId] = [];

      // Add the mechanism
      results[targetId].push({
        type: "Mecanismo",
        sku,
        description: `Ref. ${sku} - ${name}`
      });

      // Parse accessories
      for (const line of lines) {
        const lowerLine = line.toLowerCase();
        let accType = "";
        if (lowerLine.startsWith("tecla") || lowerLine.startsWith("teclas")) accType = "Tecla";
        else if (lowerLine.startsWith("tapa") || lowerLine.startsWith("tapas")) accType = "Tapa";
        else if (lowerLine.startsWith("marco") || lowerLine.startsWith("marcos")) accType = "Marco";
        else if (lowerLine.startsWith("soporte") || lowerLine.startsWith("soportes")) accType = "Soporte";
        else if (lowerLine.includes("lámpara") || lowerLine.includes("lampara")) accType = "Lámpara";

        if (accType) {
          // Extract SKUs like: "Teclas ref. 8901, 8901.2, 8901.3 y 8901.4"
          const skuMatches = line.match(/\b\d{4}(?:\.\d+)?\b/g);
          if (skuMatches) {
            for (const accSku of skuMatches) {
              // Avoid adding the main mechanism sku as accessory by mistake
              if (accSku === sku) continue;
              
              // Only add if not already present
              const exists = results[targetId].find(x => x.sku === accSku && x.type === accType);
              if (!exists) {
                results[targetId].push({
                  type: accType,
                  sku: accSku,
                  description: `Ref. ${accSku} - ${accType} para ${name}`
                });
              }
            }
          }
        }
      }
    }
  }

  // Update JSON files
  for (const [id, references] of Object.entries(results)) {
    const jsonPath = path.join(OUT_DIR, `${id}.json`);
    let existingData;
    try {
      const existingContent = await fs.readFile(jsonPath, "utf-8");
      existingData = JSON.parse(existingContent);
    } catch (err) {
      console.log(`Warning: JSON not found for ${id}, skipping.`);
      continue;
    }

    // Replace bom_references
    existingData.bom_references = references;

    await fs.writeFile(jsonPath, JSON.stringify(existingData, null, 2), "utf-8");
    console.log(`Updated ${id}.json with ${references.length} references.`);
  }
}

main().catch(console.error);
