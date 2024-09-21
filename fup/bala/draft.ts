let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function calcular_distancia (x1: number, y1: number, x2: number, y2: number): number{
  let x = (x2-x1) ** 2
  let y = (y2-y1) ** 2

  let dist = (Math.sqrt(x + y))
  return dist;
}

let x1: number = +input();
let y1: number = +input();
let x2: number = +input();
let y2: number = +input();

console.log(calcular_distancia(x1, y1, x2, y2).toFixed(2));
