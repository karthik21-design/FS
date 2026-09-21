const fs = require("fs");

fs.writeFileSync(
    "sample.txt",
    "Hello Node.js"
);

const data =
    fs.readFileSync(
        "sample.txt",
        "utf8"
    );

console.log(data);