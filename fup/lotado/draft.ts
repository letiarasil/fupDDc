let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let capacidade: number = +input();
let estado: number = 0;

while (true){
    let movimentacao: number = +input();  
    estado += movimentacao;

    if (estado == 0) {
        write("vazio");
    } else if (estado > 0 && estado < capacidade) {
        write("ainda cabe");
    } else if (estado >= capacidade && estado < capacidade * 2) {
        write("lotado");
    } else {
        write("hora de partir");
        break;
    }
}