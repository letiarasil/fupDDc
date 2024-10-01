function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

let pessoa: number = +input();
let fila: number[] = input().split(" ").map(Number);
let aluno: number[] = [];
let servidor: number[] = [];

for (let i = 0; i < pessoa; i++) {
    if (fila[i] % 2 == 0) {
        aluno.push(fila[i]);
    } else {
        servidor.push(fila[i]);
    }
}

if (servidor.length == 0) {
    write("[ ]");
} else {
    console.log("[ " + servidor.join(" ") + " ]");
}
if (aluno.length == 0) {
    write("[ ]");
} else {
    console.log("[ " + aluno.join(" ") + " ]");
}
