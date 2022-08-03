var fs = require("fs");

fs.rename("fun.py", "trick.py", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("file renamed");
  }
});
