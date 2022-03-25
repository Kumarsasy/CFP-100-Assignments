const readline = require("readline-sync");

function powerOfTwo(num) {
    let i = 0;
    let result = 0;
    while (i <= num) {
        result = Math.pow(2, i);
        console.log(result);
        i++;
    }
}

let num = readline.questionInt("Enter number ");
powerOfTwo(num);
