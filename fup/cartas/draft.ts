let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let qtdCartas: number = +input();
let valores: string[] = input().split(" ");

function cartas (carta: string) : string {
    if (carta == "1"){
        carta = "A";
    }
    if (carta == "11"){
        carta = "J";
    }
    if (carta == "12"){
        carta = "Q";
    }
    if (carta == "13"){
        carta = "K";
    }
    return carta;
}

write("[", "")
for (let i = 0; i < qtdCartas; i++) {
    if (i != 0) {
        write(", ", "");
    }
    write(cartas(valores[i]), "");
}
write("]")

/*function num_to_name (value: number): string{
let nomes: string[] = ["", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    return nomes[value];
}

let qtd: number = +input();
let cartas: number[] = input().split(" ").map(Number);

let resp: string[] = [];
//mapeamento
for (let carta of cartas) {
    resp.push(num_to_name(carta));
}

write("[", "")

for (let i = 0; i < resp.length; i++) {
    if (i != 0) {
        write(", ", "");
    } write (resp[i], "")
}
write ("]")*/