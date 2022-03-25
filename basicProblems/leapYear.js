const readline = require("readline-sync");

function leapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log("Entered year is a leap year");
    } else {
        console.log("Entered year is not a leap year");
    }
}

let year = readline.questionInt("Enter year ");
leapYear(year);
