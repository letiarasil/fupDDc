let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let l: number = +input();
let r: number = +input();
let d: number = +input();

if (r > 50 && l < r && r > d){
  console.log("S");
} else {
  console.log("N");
}
