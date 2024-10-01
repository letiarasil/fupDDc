let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let num: number = +input();
let vetA: number[] = [];
let vetB: number[] = [];

for (let i = 0; i < num; i++) {
    let lista: number[] = input().split(" ").map(Number);
    vetA.push(lista[0]);
    vetB.push(lista[1]);
}

let ref = -1;

for (let i = 0; i < num; i++) {
    if (vetA[i] >= 10 && vetB[i] >= 10) {
        Math.abs(vetA[i] - vetB[i]);

        if (ref == -1) {
            ref = i;
        } else if (Math.abs(vetA[i] - vetB[i]) < Math.abs(vetA[ref] - vetB[ref])) {
            ref = i;
        }
    }
}

if (ref == -1) {
    console.log("sem ganhador");
} else {
    console.log(ref);
}


