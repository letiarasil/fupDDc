const { truncate } = require("fs");

let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let s = +input()

let hora = Math.trunc(s/3600)
let min = Math.trunc((s%3600)/60)
let seg = (s % 3600) % 60

let resp = `${hora}:${min}:${seg}`
console.log(resp)