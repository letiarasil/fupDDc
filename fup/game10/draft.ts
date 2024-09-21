let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let tamanho: number = +input();
let disco: number = +input();
let aviao: number = +input();

if (disco == aviao) {
    console.log("0");
} else if (aviao < disco) {
    console.log(disco - aviao);
} else if (aviao == tamanho) {
    console.log(disco);
} else {
    console.log((tamanho - aviao) + disco)
}
