let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function classificar_nota (n1: number, n2: number, nf: number): string {
  let media = (n1 + n2)/2
  let mediaf = (media + nf)/2

  if (media >= 7){
    return "aprovado";
  }
  else if (media > 4 && media < 7){
    if (mediaf >= 5){
      return "aprovado na final";
    }
    else{
      return "reprovado na final";
    }
  } return "reprovado";
}


let n1: number = +input();
let n2: number = +input();
let nf: number = +input();

console.log(classificar_nota(n1, n2, nf));
