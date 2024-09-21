let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let c1: number = +input();
let c2: number = +input();
let c3: number = +input();

if (c1 == c2 && c2 == c3){
  write('3')
}
else if (c1 == c2 || c2 == c3 || c1 == c3){
  write('2')
}
else {
  write('0')
}
