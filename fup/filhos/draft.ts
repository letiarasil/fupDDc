let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let idade: number = +input();
let qtd: number = +input();

while(qtd > 0){
  console.log(idade);
  idade += 2;
  qtd -= 1;
}