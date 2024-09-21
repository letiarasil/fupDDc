let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function substring (texto: string): string {
    let resp = texto.slice(indice, indice + qtdCarac);
    return resp;
}

let texto: string = input();
let indice: number = +input();
let qtdCarac: number = +input();

console.log(substring(texto))
