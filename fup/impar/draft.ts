let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let par: number = +input();
let dedosA: number = +input();
let dedosB: number = +input();
let soma: number = dedosA + dedosB;

if (par == 0 && soma % 2 == 0){
  console.log("0");
} else if (par == 1 && soma % 2 == 1){
    console.log("0")
  } else {
    console.log("1");
}