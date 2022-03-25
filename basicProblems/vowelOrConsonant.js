const readline = require("readline-sync");

function vowelOrConsonant(ch) {
    if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
        console.log("vowel");
    } else {
        console.log("consonant");
    }
}

let ch = readline.question("Enter a character ");
vowelOrConsonant(ch);
