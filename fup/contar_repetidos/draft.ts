let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let [num, qtd] = input().split(" ").map(Number);


let qtd_total: number = 0;

for (let i = 0; i < qtd; i++) {
    let numero: number = +input();
    if (numero == num) {
        qtd_total++;
    }
}
console.log(qtd_total);