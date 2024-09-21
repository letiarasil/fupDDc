let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let dias: number = +input();
let caloriasTotal: number = 0;

for (let i = 0; i < dias; i++){
  let caloriasDia: number = +input();
  caloriasTotal += caloriasDia;
}
let media = caloriasTotal/dias;
console.log(media.toFixed(1));