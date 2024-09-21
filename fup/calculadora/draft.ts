let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function calculadora (a: number, b: number, op: string): number{
  if (op == "+"){
    return (a + b);
  }
  if (op == "-"){
      return (a - b);
  }
  if (op == "*"){
    return (a * b);
  }
  if (op == "/"){
      return (Math.floor(a/b));
  }

} 
let a: number = +input();
let b: number = +input();
let op: string = input();

console.log(calculadora(a, b, op));


