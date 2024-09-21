let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let salario_atual: number = +input();
let salario_final: number = +input();

if (salario_atual <= 1000) {
    salario_final = salario_atual + (salario_atual * (20/100));
    console.log(salario_final.toFixed(2));
} 
else if (salario_atual > 1000 && salario_atual <= 1500) {
    salario_final = salario_atual + (salario_atual * (15/100));
    console.log(salario_final.toFixed(2));
}
else if (salario_atual > 1500 && salario_atual <= 2000) {
    salario_final = salario_atual + (salario_atual * (0.10));
    console.log(salario_final.toFixed(2));
}
else {
    salario_final = salario_atual + (salario_atual * (5/100));
    console.log(salario_final.toFixed(2));
}

