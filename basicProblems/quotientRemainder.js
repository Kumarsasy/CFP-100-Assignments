const readline = require("readline-sync");

function quotientRemainder(divident, divisor) {
    let quotient = divident / divisor;
    let remainder = divident % divisor;
    console.log("Quotient is ", quotient);
    console.log("Remainder is ", remainder);
}

let divident = readline.questionInt("Enter divident ");
let divisor = readline.questionInt("Enter divisor ");

quotientRemainder(divident, divisor);
