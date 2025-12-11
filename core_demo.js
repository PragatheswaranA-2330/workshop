// core-demo.js

const fs = require('fs');
const path = require('path');
const os = require('os');

// Create a text file
fs.writeFileSync("sample.txt","Hello from Node.js");

//Read File

const data = fs.readFileSync("sample.txt","utf-8");
console.log("File Content:",data);

//Path example
console.log("File extension:",path.extname(__filename));


// os example
console.log("CPU counr:",os.cpus().length);