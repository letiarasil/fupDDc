let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let a: number = +input();
let b: number = +input();

console.log(Math.max(a, b));

/*if (a > b) {
    console.log(a);
} else if (b > a) {
    console.log(b);
} else {
    console.log(a);
}*/