let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let a = +input();
let b = +input();
let c = +input();

let x = (-b +- Math.sqrt((b ** 2) - (4 * a * c))/ 2 * a)
console.log(x);
