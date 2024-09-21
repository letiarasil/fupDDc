let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let n1 = +input()
let n2 = +input()
let nf = +input()
let media = (n1 + n2)/2
let mediaf = (media + nf)/2

if (media >= 7){
  console.log("aprovado");
}
else if (media > 4 && media < 7){
  if (mediaf >= 5){
    console.log("aprovado na final");
  }
  else{
    console.log("reprovado na final");
  }
}
else{
  console.log("reprovado ");
}