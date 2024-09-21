let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let vp = +input();
let c1 = +input();
let c2 = +input();

if (vp - c2 < vp - c1){
  console.log("primeiro");
} else if (vp - c1 < vp - c2){
    console.log("segundo");
} else if (vp - c2 == vp - c1){
    console.log("empate");
} else {
    console.log("empate");
}