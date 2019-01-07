var txtFile = "first-app.txt"
console.log("Creating the new File"+txtFile);
const fs = require('fs');
fs.writeFileSync(txtFile,"Here from PN")

