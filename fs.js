var fs = require("fs");
console.log("hello from aadish");
var data = fs.readFile("sample.txt", (err, data) => {
  console.log("reading file");
  console.log(data.toString());
});
// console.log(data.toString());
console.log("hello from aadiah bansal");
console.log(Date.now());
