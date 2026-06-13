import fs from 'fs';
import path from 'path';

const catalogPath = process.argv[2];
const outputPath = process.argv[3] ? path.join(process.cwd(), process.argv[3]) : path.join(process.cwd(), 'src/data/knowledge_base/niessen/vega/all_mechanisms_raw.json');

if (!catalogPath) {
  console.error("Usage: node parse_catalog.js <inputFilePath> [outputFilePath]");
  process.exit(1);
}

const content = fs.readFileSync(catalogPath, 'utf8');
const lines = content.split('\n').map(l => l.trim());

const products = [];
let currentBlock = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!line) continue;

  currentBlock.push(line);

  // Detect pattern: SKU (e.g. 8101 or 8101.1), Order Code (2CLA...), Packing Unit (number)
  if (i >= 2) {
    const prev2 = lines[i-2];
    const prev1 = lines[i-1];
    const curr = line;

    // Check if prev1 looks like an order code (starts with 2CLA or 2CKA, length ~15)
    if (prev1 && (prev1.startsWith('2CLA') || prev1.startsWith('2CKA'))) {
      // Check if curr is a small number (packaging unit)
      if (!isNaN(parseInt(curr)) && curr.length <= 3) {
        // We found a product!
        const sku = prev2;
        const orderCode = prev1;
        const packagingUnit = parseInt(curr);
        
        // Everything before prev2 in the currentBlock is the description/specs
        const specs = currentBlock.slice(0, currentBlock.length - 3).join('\n');
        
        products.push({
          sku,
          orderCode,
          packagingUnit,
          full_specs_and_description: specs
        });

        // Reset block for next product
        currentBlock = [];
      }
    }
  }
}

fs.writeFileSync(outputPath, JSON.stringify(products, null, 2));
console.log(`Successfully extracted ${products.length} products to ${outputPath}`);
