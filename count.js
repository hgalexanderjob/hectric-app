const fs=require('fs');
const path=require('path');
const dir=process.argv[2] || './src/data/knowledge_base/niessen/zenit';
let count=0;
const files=fs.readdirSync(dir).filter(f=>f.endsWith('.json'));
files.forEach(f => {
  const data = JSON.parse(fs.readFileSync(path.join(dir,f)));
  console.log(f + ': ' + data.bom_references.length);
  count+=data.bom_references.length;
});
console.log('TOTAL: ' + count);
