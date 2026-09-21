const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter filename: ", (filename) => {

    rl.question("Enter content: ", (content) => {

        fs.writeFileSync(filename, content);
        console.log("\nFile Created Successfully");

        console.log("\nReading File:");
        console.log(fs.readFileSync(filename, "utf8"));

        rl.question("\nEnter content to append: ", (extra) => {

            fs.appendFileSync(filename, "\n" + extra);

            console.log("\nFinal File Content:");
            console.log(fs.readFileSync(filename, "utf8"));

            rl.close();
        });
    });
});