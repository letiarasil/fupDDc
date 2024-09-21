let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let linha = input().split(" ");
let helicptero = +linha[0];
let policial = +linha[1];
let fugitivo = +linha[2];
let direcao = +linha[3];

while(true){
  fugitivo = fugitivo + direcao
  if (fugitivo == -1){
    fugitivo = 15;
  }
  if (fugitivo == 16){
    fugitivo = 0;
  }
  if (fugitivo == helicptero){
    write("S");
    break;
  }
  if (fugitivo == policial){
    write("N");
    break;
  }
}
