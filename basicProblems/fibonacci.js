console.log("Finbonacci Series");

function finbonacci() {
    let n1 = 0,
        n2 = 1,
        n3;
    console.log(n1 + " " + n2);
    for (let i = 0; i < 10; i++) {
        n3 = n1 + n2;
        console.log(" " + n3);
        n1 = n2;
        n2 = n3;
    }
}

finbonacci();
