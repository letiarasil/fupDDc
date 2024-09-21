let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let a = +input()
let b = +input()

let soma = a+b
let sub = a-b
let mul = a*b
let div = a/b
let rest = a%b

console.log(soma + "\n" + sub + "\n" + mul + "\n" + div.toFixed(2) + "\n" + rest)