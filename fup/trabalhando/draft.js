let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let dia = +input()
let hora = +input()

if (dia == 1){
  console.log("NAO")     
} else if (dia == 7 && 8 < hora && hora > 11){
  console.log("NAO");
} else if (2 <= dia <= 7 && 8 <= hora <= 11 && 14 <= hora <= 17){
    console.log("SIM");
} 