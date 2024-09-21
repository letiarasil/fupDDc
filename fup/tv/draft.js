let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let val = +input()
let qtd = +input()

let juros = (qtd-1) * 5
let total = val * (1 + juros/100)
let parc = total/qtd

console.log(parc.toFixed(2) + "\n" + total.toFixed(2))