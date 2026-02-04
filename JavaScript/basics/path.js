// path.js
const path = require('path');

function showPaths() {
  const filePath = __filename;
  const dirPath = __dirname;

  console.log("📁 Current File Path:", filePath);
  console.log("📂 Current Directory:", dirPath);

  console.log("🧩 File Name:", path.basename(filePath));
  console.log("🧱 Directory Name:", path.dirname(filePath));
  console.log("📄 File Extension:", path.extname(filePath));

  const joinedPath = path.join(dirPath, 'test', 'demo.js');
  console.log("🔗 Joined Path:", joinedPath);
}

module.exports = {
  showPaths
};
