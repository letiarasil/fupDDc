let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let a = +input()
let b = +input()
let c = +input()

let p = (a+b+c)/2
let resp = (Math.sqrt(p*(p-a)*(p-b)*(p-c)))
console.log(resp.toFixed(2))