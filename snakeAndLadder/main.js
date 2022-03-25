let player1position = 0;
let player2position = 0;
const winningPosition = 100;
let dice;
let count = 0;
let activePlayer = 0;

const switchPlayer = function () {
    activePlayer = count % 2 === 0 ? player1() : player2();
    return activePlayer;
};

let diceRoll = function () {
    dice = Math.trunc(((Math.random() * 10) % 6) + 1);
    return dice;
};

let player1 = function () {
    diceRoll();
    console.log("Player1 rolled ", dice);
    player1position += dice;
    if (player1position == 5) {
        player1position = 15;
    } else if (player1position == 20) {
        player1position = 45;
    } else if (player1position == 25) {
        player1position = 10;
    } else if (player1position == 50) {
        player1position = 18;
    }
    console.log(dice, player1position);
    count++;
};

let player2 = function () {
    diceRoll();
    console.log("Player2 rolled ", dice);
    player2position += dice;
    if (player2position == 5) {
        player2position = 15;
    } else if (player2position == 20) {
        player2position = 45;
    } else if (player2position == 25) {
        player2position = 10;
    } else if (player2position == 50) {
        player2position = 18;
    }
    console.log(dice, player2position);
    count++;
};

function startGame() {
    while (player1position <= winningPosition || player2position <= 100) {
        switchPlayer();

        if (player1position > 100 || player2position > 100) {
            if (player1position > 100) {
                console.log("Player 1 wins");
            } else {
                console.log("Player 2 wins");
            }
            break;
        }
    }
}
startGame();
