let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let qtd: number = +input();
let choco: number = 0;
let limao: number = 0;
let manha: number = 0;
let tarde: number = 0;

for (let i = 0; i < qtd; i++){
  let lista: string[] = input().split(" ");
  let sabor: string = lista[0];
  let turno: string = lista[1];
                              
  if (sabor == "c"){
    choco += 1;
  } else {
    limao += 1;
  }
  if (turno == "m"){
    manha += 1;
  } else {
    tarde += 1;
  }
}

if (choco > limao){
  console.log("c");
} else if (limao > choco){
    console.log("l");
} else {
    console.log("empate");
}

if (manha > tarde){
  console.log("t");
} else if (tarde > manha){
    console.log("m");
} else {
    console.log("empate");
}

//let saborVencedor: string = ""; inicializar string vazia