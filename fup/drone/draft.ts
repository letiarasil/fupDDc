let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let altCai: number = +input();
let largCai: number = +input();
let profCai: number = +input();
let altJan: number = +input();
let largJan: number = +input();

let area1: number = altCai * largCai;
let area2: number = altCai * profCai;

let areaJ: number = altJan * largJan;

if (area1 <= areaJ || area2 <= areaJ){
    write("S");
} else{
    write("N")
}
