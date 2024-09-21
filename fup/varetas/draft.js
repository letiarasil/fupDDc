let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let v1 = +input();
let v2 = +input();
let v3 = +input();

if (v1 < v2 + v3 && v2 < v1 + v3 && v3 < v1 + v2){
  console.log("True");
} else{
  console.log("False");
}