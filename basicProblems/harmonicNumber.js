const readline = require("readline-sync");

function harmonicNumber(n) {
    let result = 0;
    for (let i = 2; i <= n; i++) {
        result += 1 / i;
    }
    console.log(result);
}

let n = readline.questionInt("Enter number ");
harmonicNumber(n);
