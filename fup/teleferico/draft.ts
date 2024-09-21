let _cin_: string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch (e) { }
let input = (): string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end: string = "\n") => process.stdout.write("" + text + end);
export { };

let capac: number = +input();
let total_alunos: number = +input();

capac -= 1; // vaga do monitor

let viagem = Math.ceil(total_alunos / capac);

console.log(viagem);
