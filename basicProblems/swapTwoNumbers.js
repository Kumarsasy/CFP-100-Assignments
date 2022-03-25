console.log("Swapping Two Numbers");

function swap(num1, num2) {
    let temp;
    temp = num1;
    num1 = num2;
    num2 = temp;
    console.log(num1);
    console.log(num2);
}

let num1 = 10;
let num2 = 20;

swap(num1, num2);
