let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let q1 = +input()
let q2 = +input()
let q3 = +input()

let v1 = +input()
let v2 = +input()
let v3 = +input()

let qd = +input()

let vt = ((q1*v1) + (q2*v2) + (q3*v3))
let troco = qd-vt

console.log(troco.toFixed(2))