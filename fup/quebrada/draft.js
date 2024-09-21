let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let n1 = +input()
let n2 = +input()

let div = Math.trunc(n1/n2) 
let rest = n1 % n2
let queb = n1/n2

console.log(div + "\n" + rest + "\n" + queb.toFixed(2))