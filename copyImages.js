const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'assets', 'niessen', 'png', 'mecanismo');
const destDir = path.join(__dirname, 'public', 'hectric', 'niessen', 'assets', 'png', 'mechanisms');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);

files.forEach(file => {
  let newName = file
    .replace(' - copia', '') // remove windows copy artifact
    .replace(/ /g, '-') // replace spaces with dashes
    .replace('..', '.') // replace double dots
    .replace('niessen-81242.png', 'niessen-8124.2.png')
    .replace('niessen-81607.png', 'niessen-8160.7.png')
    .replace('niessen-81607-.png', 'niessen-8160.7.png')
    .replace('niessen-81851.png', 'niessen-8185.1.png')
    .replace('niessen-81884.png', 'niessen-8188.4.png')
    .replace('niessen-8119-1.png', 'niessen-8119.1.png');

  fs.copyFileSync(
    path.join(srcDir, file),
    path.join(destDir, newName)
  );
  console.log(`Copied ${file} to ${newName}`);
});
