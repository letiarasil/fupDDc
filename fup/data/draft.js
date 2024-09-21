let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let hora = +input()
let minuto = +input()
let dia = +input()
let mes = +input()
let ano = +input()
ano = ano % 100

hora = String(hora).padStart(2, '0')
minuto = String(minuto).padStart(2, '0')
dia = String(dia).padStart(2, '0')
mes = String(mes).padStart(2, '0')
ano = String(ano).padStart(2, '0')

let resp = `${hora}:${minuto} ${dia}/${mes}/${ano}`
console.log(resp)