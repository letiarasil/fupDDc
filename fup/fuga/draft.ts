let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let lista = input().split(" ");
let helicptero = +lista[0];
let policial = +lista[1];
let fugitivo = +lista[2];
let direcao = +lista[3];

while (true) {
  fugitivo += direcao;

  if (fugitivo == -1) {
    fugitivo = 15;
  }
  if (fugitivo == 16) {
    fugitivo = 0;
  }
  if (fugitivo == helicptero) {
    write("S");
    break;
  }
  if (fugitivo == policial) {
    write("N");
    break;
  }
}