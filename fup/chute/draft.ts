let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let valor: number = +input();
let chute1: number = +input();
let chute2: number = +input();
let dif1 = Math.abs(chute1 - valor);
let dif2 = Math.abs(chute2 - valor);

if (dif1 < dif2) {
    write("primeiro")
} else if (dif1 == dif2) {
    write("empate");        
} else {
    write("segundo");
}
