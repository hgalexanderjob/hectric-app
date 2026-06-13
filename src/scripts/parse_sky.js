import fs from 'fs';
import path from 'path';

const catalogPath = process.argv[2];
const outputPath = process.argv[3] ? path.join(process.cwd(), process.argv[3]) : path.join(process.cwd(), 'src/data/knowledge_base/niessen/sky/all_mechanisms_raw.json');

if (!catalogPath) {
  console.error("Usage: node parse_sky.js <inputFilePath> [outputFilePath]");
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

  // Pattern in Sky: Code (e.g. 8101, 8501) followed by Packaging Unit (e.g. 10, 20)
  // Or Code, then "XX" (color), then Packaging Unit
  if (i >= 2) {
    const curr = line;
    const prev1 = lines[i-1];
    const prev2 = lines[i-2];

    let found = false;
    let sku = "";
    let packagingUnit = 0;

    // Pattern 1: Code -> Number
    if (!isNaN(parseInt(curr)) && curr.length <= 3 && prev1 && prev1.match(/^[0-9]{4}(\.[0-9]+)?$/)) {
      sku = prev1;
      packagingUnit = parseInt(curr);
      found = true;
      currentBlock.splice(-2); // remove sku and unit from description
    } 
    // Pattern 2: Code -> "XX" -> Number (for keys/covers)
    else if (!isNaN(parseInt(curr)) && curr.length <= 3 && prev1 === "XX" && prev2 && prev2.match(/^[0-9]{4}(\.[0-9]+)?$/)) {
      sku = prev2 + " XX";
      packagingUnit = parseInt(curr);
      found = true;
      currentBlock.splice(-3); // remove sku, XX and unit from description
    }

    if (found) {
      const specs = currentBlock.join('\n');
      
      products.push({
        sku,
        packagingUnit,
        full_specs_and_description: specs
      });

      currentBlock = [];
    }
  }
}

// Clean up some noisy first elements if they are too long
const cleanProducts = products.filter(p => p.full_specs_and_description.length < 500);

// Ensure dir exists
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(cleanProducts, null, 2));
console.log(`Successfully extracted ${cleanProducts.length} products to ${outputPath}`);
