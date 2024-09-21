let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let base_1 = +input();
let base_2 = +input();

let area_metade = (160 * 70) / 2; // área do retangulo

let area_felix = (base_1 + base_2) * 70 / 2;

if (area_felix > area_metade) {
    write("1");
} else if (area_felix < area_metade) {
    write("2");
} else {
    write("0");
}
