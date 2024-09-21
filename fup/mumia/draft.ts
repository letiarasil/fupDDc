let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function classificar_idade (idade: number): number {
  if (idade < 12){
    return "crianca";
  }
  if (idade < 18){
    return "jovem";
  }
  if (idade < 65){
    return "adulto";
  }
  if (idade < 1000){
    return "idoso";
  }
  return "mumia";
}

let nome: string = input();
let idade: number = +input();
console.log(nome + " eh " + classificar_idade(idade));
//console.log(`${nome} eh ${classificar_idade(idade)}`)
