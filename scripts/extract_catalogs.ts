import fs from "fs/promises";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const catalogs = [
  { file: "niessen-alba-catalogo.txt", brand: "Niessen", series: "Alba" },
  { file: "niessen-ocean-catalogo.txt", brand: "Niessen", series: "Ocean" },
  { file: "niessen-over-catalogo.txt", brand: "Niessen", series: "Over" },
  { file: "niessen-sky-catalogo.txt", brand: "Niessen", series: "Sky" },
  { file: "niessen-vega-catalogo.txt", brand: "Niessen", series: "Vega" },
  { file: "niessen-zenit-catalogo.txt", brand: "Niessen", series: "Zenit" }
];

const mechanismsToExtract = [
  { id: "interruptor", name: "Interruptor / Conmutador" },
  { id: "enchufe-schuko", name: "Enchufe Schuko" },
  { id: "cruzamiento", name: "Cruzamiento" },
  { id: "toma-tv", name: "Toma TV / SAT" },
  { id: "toma-datos", name: "Toma de Datos (RJ45)" },
  { id: "cargador-usb", name: "Cargador USB" },
  { id: "regulador", name: "Regulador (Dimmer)" },
  { id: "persianas", name: "Persianas" }
];

async function main() {
  for (const catalog of catalogs) {
    const filePath = path.join(process.cwd(), "src", "data", "raw_catalogs", catalog.file);
    let text = "";
    try {
      text = await fs.readFile(filePath, "utf-8");
      console.log(`\n\n--- Procesando catálogo: ${catalog.series} ---`);
    } catch (err) {
      console.error(`Error leyendo catálogo ${catalog.file}`, err);
      continue;
    }

    const outputDir = path.join(process.cwd(), "src", "data", "knowledge_base", catalog.brand.toLowerCase(), catalog.series.toLowerCase());
    await fs.mkdir(outputDir, { recursive: true });

    for (const mec of mechanismsToExtract) {
      // Si el archivo ya existe y es cargador-usb de Vega que hemos hecho a mano, lo saltamos
      if (mec.id === "cargador-usb" && catalog.series === "Vega") {
        console.log(`  Saltando ${mec.name} (Ya procesado manualmente)...`);
        continue;
      }
      
      console.log(`  Buscando: ${mec.name}...`);
      
      // Buscar la primera aparición del mecanismo para extraer solo una ventana
      const lowerText = text.toLowerCase();
      const lowerName = mec.name.toLowerCase();
      let searchKeyword = lowerName;
      if (mec.id === "toma-tv") searchKeyword = "toma tv";
      if (mec.id === "toma-datos") searchKeyword = "rj45";
      if (mec.id === "regulador") searchKeyword = "regulador";
      if (mec.id === "enchufe-schuko") searchKeyword = "schuko";
      if (mec.id === "interruptor") searchKeyword = "conmutador";

      const idx = lowerText.indexOf(searchKeyword);
      if (idx === -1) {
        console.log(`    ❌ No existe la palabra clave '${searchKeyword}' en este catálogo.`);
        continue;
      }

      // Extraer ventana de 8000 caracteres
      const start = Math.max(0, idx - 1000);
      const end = Math.min(text.length, idx + 7000);
      const textWindow = text.substring(start, end);

      try {
        const response = await fetch("http://localhost:3000/api/extract", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: textWindow,
            mecName: mec.name,
            mecId: mec.id,
            catalogSeries: catalog.series,
            catalogBrand: catalog.brand
          })
        });

        const jsonRes = await response.json();
        
        if (!response.ok) {
          console.error(`    ⚠️ Error API con ${mec.name}:`, jsonRes.error || response.statusText);
          continue;
        }

        const responseText = jsonRes.responseText;
        if (!responseText) {
          console.log(`    ⚠️ Sin respuesta de la IA para ${mec.name}`);
          continue;
        }

        let cleanJson = responseText.trim();
        if (cleanJson.startsWith("\`\`\`json")) {
          cleanJson = cleanJson.substring(7);
          if (cleanJson.endsWith("\`\`\`")) {
            cleanJson = cleanJson.substring(0, cleanJson.length - 3);
          }
        }
        
        const object = JSON.parse(cleanJson);

        if (object.exists_in_catalog && object.mechanism_data && object.mechanism_data.bom_references && object.mechanism_data.bom_references.length > 0) {
          const data = object.mechanism_data;
          data.mechanism_id = mec.id;
          data.brand = catalog.brand;
          data.series = catalog.series;

          const outPath = path.join(outputDir, `${mec.id}.json`);
          await fs.writeFile(outPath, JSON.stringify(data, null, 2), "utf-8");
          console.log(`    ✅ Guardado: ${outPath}`);
        } else {
          console.log(`    ❌ No existe en este catálogo (o no hay referencias SKU).`);
        }
      } catch (err: any) {
        console.error(`    ⚠️ Error parseando con ${mec.name}:`, err.message);
      }
      
      // Añadir un pequeño retraso para no sobrepasar límites de API
      await new Promise(r => setTimeout(r, 2000));
    }
  }
}

main().catch(console.error);
