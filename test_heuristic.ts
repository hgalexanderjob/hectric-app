import fs from "fs/promises";
import path from "path";

async function run() {
  const text = await fs.readFile(path.join(process.cwd(), "src", "data", "raw_catalogs", "niessen", "niessen-alba-catalogo.txt"), "utf-8");
  const lines = text.split('\n');
  const lowerLines = lines.map(l => l.toLowerCase());
  
  const sku = "8904.39";
  let bestType = "Mecanismo";

  for (let i = 0; i < lowerLines.length; i++) {
    if (lowerLines[i].includes(sku.toLowerCase())) {
      console.log(`Found at line ${i}: ${lowerLines[i]}`);
      const contextLines = [];
      for (let j = Math.max(0, i - 5); j <= i; j++) {
        contextLines.push(lowerLines[j]);
      }
      const context = contextLines.join(" ");
      console.log(`Context: ${context}`);

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
      
      console.log(`bestType: ${bestType}`);
      if (bestType !== "Mecanismo") break;
    }
  }
  console.log(`Final bestType: ${bestType}`);
}
run();
