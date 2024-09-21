import { getActiveResourcesInfo } from "process";

let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let prof: number = +input();
let salto: number = +input();
let escorrego: number = +input();
let aterrissagem = 0;
let posicao: number = 0;

while (aterrissagem < prof) {
   
    aterrissagem = salto + posicao;

    if (aterrissagem < prof) {
        write (posicao + " " + aterrissagem);
    } else {
        write (posicao + " saiu");
    }
    posicao += (salto - escorrego);
}
 