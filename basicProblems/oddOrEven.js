const readline = require("readline-sync");

function oddOrEven(num) {
    if (num % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

let num = readline.questionInt("Enter a number ");
oddOrEven(num);
