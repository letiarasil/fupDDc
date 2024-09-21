let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let jog1: string = input();
let jog2: string = input();

if (jog1 == "R" && jog2 == "S"){
  console.log("jog1");
} else if (jog1 == "P" && jog2 == "R"){
    console.log("jog1");
} else if (jog1 == "S" && jog2 == "P"){
    console.log("jog1");
} else if (jog1 == jog2){
    console.log("empate");
} else {
    console.log("jog2");
}

// função tem que ter o nome descritivo, normalmente com verbo
// pensar através de parâmetros
// return serve para retornar um valor de uma função, esse valor pode ser modificado, armazenado...
// com o return não precisa dos elses, pois ele já garante que a função é finalizada
