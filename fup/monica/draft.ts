let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function descobrir_mais_velho (mon: number, f1: number, f2: number): number{
  let f3: number = mon - (f1 + f2);

  if (f1 > f2 && f1 > f3){
    return (f1);
  } else if (f2 > f1 && f2 > f3){
      return (f2);
  } return (f3);
  }

let mon: number = +input();
let f1: number = +input();
let f2: number = +input();

console.log(descobrir_mais_velho(mon, f1, f2));


