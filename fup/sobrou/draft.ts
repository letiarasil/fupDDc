let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let qtd1: number = +input();
let qtd2: number = +input();
let qtd3: number = +input();
let prod1: number = +input();
let prod2: number = +input();
let prod3: number = +input();
let din: number = +input();

let valor1 = qtd1 * prod1;
let valor2 = qtd2 * prod2;
let valor3 = qtd3 * prod3;

let troco = din - (valor1 + valor2 + valor3);
console.log(troco.toFixed(2));
