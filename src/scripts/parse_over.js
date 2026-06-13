import fs from 'fs';
import path from 'path';

const catalogPath = process.argv[2];
const outputPath = process.argv[3] ? path.join(process.cwd(), process.argv[3]) : path.join(process.cwd(), 'src/data/knowledge_base/niessen/over/all_mechanisms_raw.json');

if (!catalogPath) {
  console.error("Usage: node parse_over.js <inputFilePath> [outputFilePath]");
  process.exit(1);
}

const content = fs.readFileSync(catalogPath, 'utf8');
const lines = content.split('\n').map(l => l.trim());

const products = [];

for (const line of lines) {
  if (line.startsWith('Descripción:') || line.startsWith('Denominación:')) {
    const parts = line.split('|').map(p => p.trim());
    
    let description = "";
    let sku = "";
    let specs = "";

    for (const part of parts) {
      if (part.startsWith('Descripción:')) {
        description = part.replace('Descripción:', '').trim();
      } else if (part.startsWith('Denominación:')) {
        description = part.replace('Denominación:', '').trim();
      } else if (part.startsWith('Código:')) {
        sku = part.replace('Código:', '').trim();
      } else if (part.startsWith('Datos técnicos:')) {
        specs = part.replace('Datos técnicos:', '').trim();
      } else if (part.startsWith('Color:')) {
        specs += " Color: " + part.replace('Color:', '').trim();
      }
    }

    if (sku) {
      products.push({
        sku,
        description,
        full_specs_and_description: `${description}\nCódigo: ${sku}\nDatos Técnicos: ${specs}`
      });
    }
  }
}

// Ensure dir exists
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(products, null, 2));
console.log(`Successfully extracted ${products.length} products to ${outputPath}`);
