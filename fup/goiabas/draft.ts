let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let capac: number = +input();
let banana: number = +input();
let goiaba: number = +input();
let manga: number = +input();

let qtd_total: number = (banana + goiaba + manga);
let tempo: number = Math.ceil(qtd_total/capac);

console.log(tempo);