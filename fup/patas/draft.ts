let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let chico: number = +input();
let cebolinha: number = +input();
let qtd: number = +input();
let total: number = 0;

for (let i = 0; i < qtd; i++){
  let animal: string = input();
  if (animal == "c" || animal == "v"){
    total += 4;
  } else if (animal == "g"){
      total += 2;
  }
}
console.log(total);

let distChico = chico - total
if (distChico < 0){
  distChico = distChico * -1;
}
let distCebolinha = cebolinha - total
if (distCebolinha < 0){
  distCebolinha = distCebolinha * -1;
}

if (distChico == distCebolinha){
  write("empate");
} else if (distChico > distCebolinha){
    write("Cebolinha");
} else {
    write("Chico Bento");
}
