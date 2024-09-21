let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let num = input().split(" ").map(Number);
let a = +num[0];
let b = +num[1];

write ("[ ", "")
if (a > b) {
    while (b < a) {
        write (a, " ");
        a--;
    }
} else {
    while (a < b) {
        write (a, " ");
        a++;
    }
}
write ("]");

