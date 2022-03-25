console.log("Flip Coin");
const readline = require("readline-sync");

function flipCoinProb() {
    let num = readline.questionInt("Enter a Number ");
    let headCount = 0;
    let tailCount = 0;
    let headCountPercent;
    let tailCountPercent;
    for (let i = 0; i < num; i++) {
        let flipCoin = Math.floor((Math.random() * 10) % 2);
        if (flipCoin == 0) {
            console.log("Heads");
            headCount += 1;
            headCountPercent = (headCount * 100) / 10;
        } else {
            console.log("Tails");
            tailCount += 1;
            tailCountPercent = (tailCount * 100) / 10;
        }
    }
    console.log(headCount);
    console.log(tailCount);
    console.log(headCountPercent);
    console.log(tailCountPercent);
}

flipCoinProb();
