const readline = require("readline-sync");

function largestOfthreeNum(a, b, c) {
    if (a > b && a > c) {
        console.log("a is greater");
    } else if (b > a && b > c) {
        console.log("b is greater");
    } else {
        console.log("c is greater");
    }
}

let a = readline.questionInt("Enter a number ");
let b = readline.questionInt("Enter a number ");
let c = readline.questionInt("Enter a number ");

largestOfthreeNum(a, b, c);
