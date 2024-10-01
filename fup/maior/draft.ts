let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let chute1: number = +input();
let chute2: string = input();
let valor: number = +input();

if (chute1 < valor && chute2 == "M") {
    write("segundo");
} else if (chute1 > valor && chute2 == "m") {
    write("segundo");
} else if (chute1 > valor && chute2 == "m") {
    write("primeiro");
} else {
    write("primeiro")
}