let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let qtd: number = +input();
let lista: number [] = [];


for (let i = 0; i < qtd; i++) {
  lista.push(+input());
}

let somaImp: number = 0;
let somaPar: number = 0;

for (let elem of lista) {
  if (elem % 2 == 0) {
    somaPar += elem;
  } else {
    somaImp += elem;
  }
}

if (somaPar > somaImp) {
  console.log("rebeldes");
} else if (somaImp > somaPar) {
    console.log("soldados");
} else {
    console.log("empate")
}