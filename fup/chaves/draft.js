let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let n1 = +input();

if (n1 > 0){
  console.log("positivo");
} else if(n1 < 0){
  console.log("negativo");
} else{
    console.log("nulo");
}