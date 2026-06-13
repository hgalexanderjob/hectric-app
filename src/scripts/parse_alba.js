import fs from 'fs';
import path from 'path';

const catalogPath = process.argv[2];
const outputPath = process.argv[3] ? path.join(process.cwd(), process.argv[3]) : path.join(process.cwd(), 'src/data/knowledge_base/niessen/alba/all_mechanisms_raw.json');

if (!catalogPath) {
  console.error("Usage: node parse_alba.js <inputFilePath> [outputFilePath]");
  process.exit(1);
}

const content = fs.readFileSync(catalogPath, 'utf8');
const lines = content.split('\n').map(l => l.trim());

const products = [];
let currentCategory = "";

for (const line of lines) {
  // Extract category headers if any, just to have context
  if (line.match(/^[A-ZÁÉÍÓÚÑ ]+:$/)) {
    currentCategory = line;
  }

  if (line.includes('| Código:')) {
    const parts = line.split('|').map(p => p.trim());
    
    let description = "";
    let sku = "";
    let orderCode = "";
    let packagingUnit = 0;

    const descPart = parts[0];
    const codePart = parts[1];
    const embPart = parts[2];

    if (descPart.includes('Ref:')) {
      const descSplit = descPart.split('Ref:');
      description = descSplit[0].replace(/^- /, '').trim();
      sku = descSplit[1].trim();
    } else {
      // It's a key/cover like "- Blanco Brillo: 8901 BL"
      const descSplit = descPart.split(':');
      if (descSplit.length >= 2) {
        description = descSplit[0].replace(/^- /, '').trim();
        sku = descSplit.slice(1).join(':').trim();
      } else {
        description = descPart;
      }
    }

    if (codePart && codePart.startsWith('Código:')) {
      orderCode = codePart.replace('Código:', '').trim();
    }

    if (embPart && embPart.startsWith('Emb:')) {
      packagingUnit = parseInt(embPart.replace('Emb:', '').trim());
    }

    if (orderCode) {
      products.push({
        sku,
        orderCode,
        packagingUnit,
        description: currentCategory ? `${currentCategory} ${description}` : description,
        full_specs_and_description: `${currentCategory}\n${descPart}\nCódigo de Pedido: ${orderCode}\nEmbalaje: ${packagingUnit}`
      });
    }
  }
}

// Ensure dir exists
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(products, null, 2));
console.log(`Successfully extracted ${products.length} products to ${outputPath}`);
