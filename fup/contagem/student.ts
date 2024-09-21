function count(vet: number[], value: number): number {
    let contador: number = 0;
    for (let elem of vet) {
        if (elem == value) {
            contador++;
        }
    }    
    return contador;
}

function sum(vet: number[]): number {
    let soma: number = 0;
    for (let i = 0; i < vet.length; i++) {
        soma += Math.abs(vet[i]);
    }
    return soma;
}

function average(vet: number[]): number {
    let media: number = sum(vet) / vet.length;
    return media;
}

function more_men(vet: number[]): string {
    let homem: number = 0;
    let mulher: number = 0;

    for (let i = 0; i < vet.length; i++) {
        if (vet[i] > 0) {
            mulher++;
        } else {
            homem++;
        }
    }
    if (mulher < homem) {
        return "women";
    } else if (homem < mulher) {
        return "men";
    } return "draw";
}

function half_compare(vet: number[]): string {
    let metade1 = vet.slice(0, vet.length/2);
    let metade2 = vet.slice(vet.length / 2, vet.length);
    let soma1 = sum(metade1);
    let soma2 = sum(metade2);

    if (soma1 > soma2) {
        return "first"
    } else if (soma2 > soma1) {
        return "second"
    } return "draw";
}

function sex_battle(vet: number[]): string {
    let mulher: number = 0;
    let homem: number = 0;

    for (let i = 0; i < vet.length; i++) {
        if (vet[i] > 0) {
            mulher += Math.abs(vet[i]);
        } else {
            homem += Math.abs(vet[i]);
        }
    }
    if (mulher > homem) {
        return "men";
    } else if (homem > mulher) {
        return "women"
    } return "draw";
}

if (require.main === module) {
}

export { count, sum, average, more_men, half_compare, sex_battle };