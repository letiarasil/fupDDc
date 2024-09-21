let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let qtd: number = +input();
let lista: number[] = [];

for (let i = 0; i < qtd; i++) {
    lista.push(+input());
    console.log(lista[i]);
}

// push - adiciona um elemento no fim do vetor
// pop - remove um elemento do final do vetor e retorna
// shift - remove um elemento do começo do vetor e retorna
// unshift - adiciona um elemento no começo do vetor