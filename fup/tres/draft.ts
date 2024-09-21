var readlineSync = require('readline-sync');
let input = () : string => readlineSync.question();
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);

/*let userName = input();
console.log ('Hi ' + userName + ' a/o milior' + '!');
console.log("oi");*/
function random (inf: number, sup: number): number {
  return Math.floor(Math.random() * (sup - inf)) + inf;
}

let menor = 0;
let maior = 100;
write ("Escolha seu número e aperte enter");
input();

for (;;) {
  let chute = +random(menor + 1, maior);
  write(`Seu número é o ${chute}? (1. Menor) (2. Maior) (3. Acertou)`);
  let resp = input();
  if (resp == "3") {
    console.log("Acertei!");
    break;
  }
  if (resp == "1") {
    maior = chute;
  } else {
    menor = chute;
  }
  if (maior - menor == 2) {
    console.log("Eu perdi o jogo");
    break;
  }
}

/*console.log("Escolha pedra, papel ou tesoura");
let jog1: string = input();
let jog2: string = input();

if (jog1 == "pedra" && jog2 == "tesoura" ||
    jog1 == "tesoura" && jog2 == "papel" ||
    jog1 == "papel" && jog2 == "pedra") {
  console.log("O jogador 1 venceu!");
} else if (jog1 == jog2) {
  console.log("empate!");
} else {
  console.log("O jogador 2 venceu!")
}*/ //pedra papel ou tesoura
    




/*let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};*/

/*function calcular_inteiros (a: number, b: number, c: number): number{
  let soma = a + b + c;
  return soma;
}

let a: number = +input();
let b: number = +input();
let c: number = +input();

console.log(calcular_inteiros(a, b, c));*/



// let frutas: string[] = ["uva", "amora", "abacaxi"];
// let frutas: string[] = []; //sintaxe de criação da lista
// length é atributo, não usa parêntese depois dele;
// frutas[2] = "amora" //substitui o abacaxi por amora
// frutas.push("amora", "siriguela", "pitaya", "pitomba"); // adiciona um(ou mais) elementos no final da lista e diz o novo tamanho dela
// frutas.pop(); //remove o último elemento do array, se ele já estiver vazio, imprime UNDEFINED;
// frutas.unshift(); // adiciona um elemento no início da lista

// let vitamina: string[] = ["leite", "goiaba", "açucar", "neston"];
// //for range
// for (let nome_da_variavel of nome_da_variavel_que_guarda_a_lista){
//   console.log(nome_da_variavel);
// }

// for (let nome_da_variavel of vitamina){
//   console.log(elem);
// }

// for (let i = 0; i < vitamina.lenght; i +=1){
//   console.log(vitamina[1]);
// } //quando quer substituir alguém da lista ou precisa do índice
