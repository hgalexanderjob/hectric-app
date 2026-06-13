import fs from "fs/promises";
import path from "path";

const catalogs = [
  // Niessen
  { file: "niessen/niessen-alba-catalogo.txt", brand: "Niessen", series: "alba" },
  { file: "niessen/niessen-ocean-catalogo.txt", brand: "Niessen", series: "ocean" },
  { file: "niessen/niessen-over-catalogo.txt", brand: "Niessen", series: "over" },
  { file: "niessen/niessen-sky-catalogo.txt", brand: "Niessen", series: "sky" },
  { file: "niessen/niessen-vega-catalogo.txt", brand: "Niessen", series: "vega" },
  { file: "niessen/niessen-zenit-catalogo.txt", brand: "Niessen", series: "zenit" },

  // Legrand
  { file: "legrand/legrand-arteor-catalogo.txt", brand: "Legrand", series: "arteor" },
  { file: "legrand/legrand-celiane-catalogo.txt", brand: "Legrand", series: "celiane" },
  { file: "legrand/legrand-mosaic-catalogo.txt", brand: "Legrand", series: "mosaic" },
  { file: "legrand/legrand-niloe-step-catalogo.txt", brand: "Legrand", series: "niloe-step" },
  { file: "legrand/legrand-oteo-catalogo.txt", brand: "Legrand", series: "oteo" },
  { file: "legrand/legrand-plexo-catalogo.txt", brand: "Legrand", series: "plexo" },
  { file: "legrand/legrand-soliroc-catalogo.txt", brand: "Legrand", series: "soliroc" },
  { file: "legrand/legrand-valena-next-catalogo.txt", brand: "Legrand", series: "valena-next" },

  // Simon
  { file: "simon/simon-100-catalogo.txt", brand: "Simon", series: "100" },
  { file: "simon/simon-270-catalogo.txt", brand: "Simon", series: "270" },
  { file: "simon/simon-82-catalogo.txt", brand: "Simon", series: "82" },
  { file: "simon/simon-82-detail-catalogo.txt", brand: "Simon", series: "82-detail" },
  { file: "simon/simon-27-play-catalogo.txt", brand: "Simon", series: "27-play" },
  { file: "simon/simon-44-aqua-catalogo.txt", brand: "Simon", series: "44-aqua" },
  { file: "simon/simon-500-cima-catalogo.txt", brand: "Simon", series: "500-cima" },
  { file: "simon/simon-24-harmonie-catalogo.txt", brand: "Simon", series: "24-harmonie" }
];

const mechanismsToExtract = [
  { id: "interruptor", name: "Interruptor", searchWords: ["interruptor"] },
  { id: "conmutador", name: "Conmutador", searchWords: ["conmutador", "cruzamiento"] },
  { id: "pulsador", name: "Pulsador", searchWords: ["pulsador"] },
  { id: "combinaciones", name: "Combinaciones", searchWords: ["combinaciones", "doble interruptor", "doble conmutador", "doble pulsador"] },
  { id: "timbre-zumbador", name: "Timbre / Zumbador", searchWords: ["timbre", "zumbador"] },
  { id: "enchufe-schuko", name: "Enchufe Schuko", searchWords: ["schuko", "base de enchufe", "bases de enchufe"] },
  { id: "toma-tv", name: "Toma TV / SAT", searchWords: ["toma tv", "toma r/tv", "satelite", "satélite", "tomas de televisión"] },
  { id: "toma-datos", name: "Toma de Datos (RJ45)", searchWords: ["rj45", "toma informática", "datos", "tomas informáticas", "conectores vdi"] },
  { id: "toma-telefono", name: "Tomas de Teléfono", searchWords: ["teléfono", "rj11", "rj12", "tomas de teléfono"] },
  { id: "cargador-usb", name: "Cargador USB", searchWords: ["cargador usb", "toma usb", "cargadores usb"] },
  { id: "regulador", name: "Regulador (Dimmer)", searchWords: ["regulador", "dimmer", "reguladores electrónicos giratorios", "reguladores dali giratorios"] },
  { id: "persianas", name: "Persianas", searchWords: ["persiana", "pulsador / interruptor para persianas", "interruptor para persianas electrónico"] }
];

async function parseManualTable(filePath: string): Promise<Record<string, { sku: string, description: string }[]>> {
  const result: Record<string, { sku: string, description: string }[]> = {};
  let currentHectorId: string | null = null;

  try {
    const content = await fs.readFile(filePath, "utf-8");
    const lines = content.split('\n');

    // Mapping from manual section names to Hector IDs (Order matters! More specific first)
    const sectionMapping: Array<[string, string]> = [
      ["persianas", "persianas"],
      ["toma de datos", "toma-datos"],
      ["tomas informáticas", "toma-datos"],
      ["tomas de televisión", "toma-tv"],
      ["tomas de teléfono", "toma-telefono"],
      ["bases de enchufe", "enchufe-schuko"],
      ["cargadores usb", "cargador-usb"],
      ["cruzamiento", "conmutador"],
      ["conmutador", "conmutador"],
      ["pulsador", "pulsador"],
      ["combinaciones", "combinaciones"],
      ["timbre", "timbre-zumbador"],
      ["zumbador", "timbre-zumbador"],
      ["reguladores", "regulador"],
      ["salida de cable", "interruptor"],
      ["tapa ciega", "interruptor"],
      ["interruptor", "interruptor"]
    ];

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;

      // Check for section headers: <!-- ========== Name ========== -->
      const sectionMatch = trimmed.match(/<!--\s*==========\s*(.+?)\s*==========\s*-->/);
      if (sectionMatch) {
        const sectionName = sectionMatch[1].toLowerCase();
        if (sectionName.startsWith("end ")) {
          currentHectorId = null;
          continue;
        }

        // Find the matching Hector ID
        currentHectorId = null;
        for (const [key, hectorId] of sectionMapping) {
          if (sectionName.includes(key)) {
            currentHectorId = hectorId;
            break;
          }
        }
        continue;
      }

      // If we are inside a valid section, parse SKUs
      if (currentHectorId) {
        if (!result[currentHectorId]) result[currentHectorId] = [];

        // Split by line and grab the last word(s) as SKU
        const words = trimmed.split(/\s+/);
        let sku = "";
        let desc = "";

        const lastWord = words[words.length - 1];
        const secondLastWord = words.length > 1 ? words[words.length - 2] : "";

        if (lastWord && /\d/.test(lastWord)) {
          sku = lastWord;
          desc = words.slice(0, -1).join(' ').trim();
        } else if (secondLastWord && /\d/.test(secondLastWord)) {
          sku = `${secondLastWord} ${lastWord}`;
          desc = words.slice(0, -2).join(' ').trim();
        }

        if (sku) {
          // Ignorar si el SKU no parece un SKU real sino parte de la descripción (aunque el split por espacios suele funcionar bien)
          // Asumimos que la tabla manual siempre tiene el SKU al final
          result[currentHectorId].push({
            sku: sku,
            description: `Ref. ${sku} - ${desc}`
          });
        }
      }
    }
  } catch (e) {
    // File might not exist, that's fine
  }
  return result;
}

async function main() {
  for (const catalog of catalogs) {
    const manualTablePath = path.join(process.cwd(), "src", "data", "raw_catalogs", catalog.brand.toLowerCase(), catalog.series.toLowerCase(), "tabla-de-códigos.txt");
    const manualMechanisms = await parseManualTable(manualTablePath);
    const hasManualMechanisms = Object.keys(manualMechanisms).length > 0;

    const filePath = path.join(process.cwd(), "src", "data", "raw_catalogs", catalog.file);
    let text = "";
    try {
      text = await fs.readFile(filePath, "utf-8");
      console.log(`\n\n--- Procesando catálogo: ${catalog.series} ---`);
    } catch (err) {
      if (!hasManualMechanisms) {
        console.error(`Error leyendo catálogo ${catalog.file} y no hay tabla manual. Se omite.`, err);
        continue;
      }
      console.log(`\n\n--- Procesando catálogo: ${catalog.series} (SÓLO MODO MANUAL) ---`);
    }

    const outputDir = path.join(process.cwd(), "src", "data", "knowledge_base", catalog.brand.toLowerCase(), catalog.series.toLowerCase());
    await fs.mkdir(outputDir, { recursive: true });

    console.log(`[DEBUG] Loaded manual table for ${catalog.series}:`, Object.keys(manualMechanisms).map(k => `${k}: ${manualMechanisms[k].length} items`));

    const lines = text ? text.split('\n') : [];
    const lowerLines = lines.map(l => l.toLowerCase());

    for (const mec of mechanismsToExtract) {
      const foundLineIndices: number[] = [];
      const manualList = manualMechanisms[mec.id] || [];
      const hasManualList = manualList.length > 0;

      // Buscamos en qué líneas se menciona el mecanismo
      for (let i = 0; i < lowerLines.length; i++) {
        for (const word of mec.searchWords) {
          if (lowerLines[i].includes(word)) {
            foundLineIndices.push(i);
            break; // Si ya encontramos una palabra en esta línea, pasamos a la siguiente
          }
        }
      }

      if (foundLineIndices.length === 0 && !hasManualList) {
        console.log(`  ❌ No se encontró ${mec.name}`);
        continue;
      }

      console.log(`  ✅ Encontrado ${mec.name} (en ${foundLineIndices.length} líneas, manual: ${hasManualList})`);

      const skusFound = new Map<string, { type: string, description: string, isManual?: boolean }>(); // sku -> data

      for (const manualItem of manualList) {
        skusFound.set(manualItem.sku, {
          type: "Mecanismo",
          description: manualItem.description,
          isManual: true
        });
      }

      const skuRegex = /\b([A-Z]{0,2}\d{1,2}(?:\s?\d{2,3})*(?:\.\d+)?)\b/g;

      for (const lineIndex of foundLineIndices) {
        // Mirar las siguientes 50 líneas
        const maxLine = Math.min(lines.length, lineIndex + 50);
        for (let i = lineIndex; i < maxLine; i++) {
          const currentLine = lines[i];
          const currentLower = lowerLines[i];

          let match;
          while ((match = skuRegex.exec(currentLine)) !== null) {
            const cleanSku = match[1].replace(/\s+/g, '');
            if (
              !cleanSku.match(/^(19|20)\d{2}$/) &&
              !cleanSku.match(/^IP\d{2}$/i) &&
              !cleanSku.match(/^(9001|14001|14006|45001)$/) &&
              cleanSku.length >= 4 &&
              cleanSku.length <= 8
            ) {

              // HEURÍSTICA LÍNEA A LÍNEA: Miramos la línea actual y las 3 anteriores
              const contextLines = [];
              for (let j = Math.max(0, i - 3); j <= i; j++) {
                contextLines.push(lowerLines[j]);
              }
              const context = contextLines.join(" ");

              let typeStr = "Mecanismo";
              if (/lámpara|led|iluminable/.test(context)) {
                typeStr = "Lámpara";
              } else if (/bastidor|soporte|caja/.test(context)) {
                typeStr = "Bastidor";
              } else if (/marco/.test(context)) {
                typeStr = "Marco";
              } else if (/tapa|visor|símbolo|ciega/.test(context)) {
                typeStr = "Tapa";
              } else if (/tecla/.test(context)) {
                typeStr = "Tecla";
              }

              // Si existe lista manual y este SKU no es manual, no puede ser Mecanismo
              if (hasManualList && typeStr === "Mecanismo") {
                if (!skusFound.has(cleanSku) || !skusFound.get(cleanSku)?.isManual) {
                  // Extraer color si existe (ej. BL, PL, AN)
                  let colorInfo = "";
                  const colorMatch = currentLine.substring(match.index + match[0].length).match(/^\s*(BL|BB|AN|AA|PL|CV|NT|DN|GR|CB|CN|AI)/i);
                  if (colorMatch) {
                    colorInfo = ` (Color: ${colorMatch[1].toUpperCase()})`;
                  }

                  // No sobreescribir si ya está marcado como manual
                  if (skusFound.has(cleanSku) && skusFound.get(cleanSku)?.isManual) {
                    continue;
                  }

                  if (!skusFound.has(cleanSku) || (skusFound.get(cleanSku)?.type === "Mecanismo" && typeStr !== "Mecanismo")) {
                    skusFound.set(cleanSku, {
                      type: typeStr,
                      description: `Ref. ${cleanSku} - ${typeStr} para ${mec.name}${colorInfo}`
                    });
                  }
                }
              } else {
                // Extraer color si existe (ej. BL, PL, AN)
                let colorInfo = "";
                const colorMatch = currentLine.substring(match.index + match[0].length).match(/^\s*(BL|BB|AN|AA|PL|CV|NT|DN|GR|CB|CN|AI)/i);
                if (colorMatch) {
                  colorInfo = ` (Color: ${colorMatch[1].toUpperCase()})`;
                }

                // No sobreescribir si ya está marcado como manual
                if (skusFound.has(cleanSku) && skusFound.get(cleanSku)?.isManual) {
                  continue;
                }

                if (!skusFound.has(cleanSku) || (skusFound.get(cleanSku)?.type === "Mecanismo" && typeStr !== "Mecanismo")) {
                  skusFound.set(cleanSku, {
                    type: typeStr,
                    description: `Ref. ${cleanSku} - ${typeStr} para ${mec.name}${colorInfo}`
                  });
                }
              }
            }
          }
        }
      }

      // Segunda pasada: buscar el SKU en todo el documento para mejorar la clasificación
      for (const [sku, data] of skusFound.entries()) {
        if (data.isManual) continue; // Es manual, sabemos con certeza que es Mecanismo
        if (data.type !== "Mecanismo") continue; // Ya tiene una clasificación específica

        let bestType = "Mecanismo";

        // Buscar este SKU en todo el documento
        for (let i = 0; i < lowerLines.length; i++) {
          if (lowerLines[i].includes(sku.toLowerCase())) {
            // Mirar contexto amplio (misma línea y hasta 5 anteriores)
            const contextLines = [];
            for (let j = Math.max(0, i - 5); j <= i; j++) {
              contextLines.push(lowerLines[j]);
            }
            const context = contextLines.join(" ");

            if (/lámpara|led|iluminable/.test(context)) {
              bestType = "Lámpara";
            } else if (/bastidor|soporte|caja/.test(context)) {
              bestType = "Bastidor";
            } else if (/marco/.test(context)) {
              bestType = "Marco";
            } else if (/tapa|visor|símbolo|ciega/.test(context)) {
              bestType = "Tapa";
            } else if (/tecla/.test(context)) {
              bestType = "Tecla";
            }

            if (bestType !== "Mecanismo") {
              break; // Encontramos una clasificación mejor, dejamos de buscar
            }
          }
        }

        if (sku === "8904.39") {
          console.log(`[DEBUG] 8904.39 bestType is ${bestType}`);
        }

        if (bestType !== "Mecanismo") {
          // Actualizar la entrada
          skusFound.set(sku, {
            type: bestType,
            description: data.description.replace("Mecanismo para", `${bestType} para`)
          });
        }
      }

      const allRefs = Array.from(skusFound.entries()).map(([sku, data]) => ({
        type: data.type,
        sku: sku,
        description: data.description
      }));

      // Priorizar Mecanismo
      allRefs.sort((a, b) => {
        if (a.type === 'Mecanismo' && b.type !== 'Mecanismo') return -1;
        if (a.type !== 'Mecanismo' && b.type === 'Mecanismo') return 1;
        return 0;
      });

      // Aumentamos a 100 para que quepan todos los accesorios también
      const bom_references = allRefs.slice(0, 100);

      // Creamos el JSON base
      const data = {
        brand: catalog.brand,
        series: catalog.series,
        mechanism_id: mec.id,
        mechanism_name: mec.name,
        description: `Mecanismo ${mec.name} de la serie ${catalog.series} de ${catalog.brand}.`,
        technical_specs: {
          voltage: "250V~",
          amperage: mec.id === "enchufe-schuko" ? "16A" : (mec.id === "cargador-usb" ? "5V DC" : "10AX"),
        },
        installation_steps: [
          "Cortar el suministro eléctrico general.",
          "Pelar los cables aproximadamente 11-14mm según las especificaciones del fabricante.",
          "Conectar los cables en los bornes correspondientes (fase, neutro, tierra).",
          "Fijar el mecanismo a la caja de empotrar.",
          "Colocar el marco embellecedor y la tecla/tapa."
        ],
        bom_references: bom_references.length > 0 ? bom_references : [{ type: "Genérico", sku: "N/A", description: "Referencia genérica" }],
        warnings: [
          "La instalación debe ser realizada por un profesional cualificado.",
          "Verificar la ausencia de tensión antes de manipular."
        ]
      };

      const outPath = path.join(outputDir, `${mec.id}.json`);
      await fs.writeFile(outPath, JSON.stringify(data, null, 2), "utf-8");
      console.log(`    -> Guardado en ${outPath}`);
    }
  }
}

main().catch(console.error);
