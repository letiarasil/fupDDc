let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let a = +input()
let b = +input()
let res = a/b
let resto = a % b

res = Math.floor(res)
console.log (res + ' ' + resto)