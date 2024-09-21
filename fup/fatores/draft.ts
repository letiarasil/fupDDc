let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let divisor: number = 2;
let cont: number = 0;
let num: number = +input();


while (num > 1) {
    if (num % divisor == 0) {
        num /= divisor;
        cont++;
    } else {
        if (cont > 0) {
            write (divisor + " " + cont);
            cont = 0;
        }
        divisor++;
    }
}
write (divisor + " " + cont);