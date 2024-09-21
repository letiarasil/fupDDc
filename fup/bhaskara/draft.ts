let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let a: number = +input();
let b: number = +input();
let c: number = +input();

let delta: number = b * b - 4 * a * c;

if (delta > 0){
    let raiz1: number = (-b + Math.sqrt(delta)) / (2 * a);
    let raiz2: number = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(raiz1.toFixed(2));
    console.log(raiz2.toFixed(2));
} else if (delta == 0){
    let raiz: number = -b / (2 * a);
    console.log(raiz.toFixed(2));
} else {
    console.log("nao ha raiz real");
}

