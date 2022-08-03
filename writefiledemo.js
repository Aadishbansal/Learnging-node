var fs = require("fs");

fs.writeFile(
  "myfile.txt",
  "this file is created with the help of fs module",
  (err) => {
    if (err) {
      return console.error(err);
    } else {
      console.log("data added successfully");
    }
  }
);
