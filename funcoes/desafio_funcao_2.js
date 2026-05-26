// parametro (nota) -> (conceito)

function conceito(nota) {
    if (nota >= 9 && nota <= 10) {
        return "Seu conceito é A+";

    } else if (nota >= 8 && nota < 9) {
        return "Seu conceito é A";

    } else if (nota >= 7 && nota < 8) {
        return "Seu conceito é B+";

    } else if (nota >= 6 && nota < 7) {
        return "Seu conceito é B";

    } else if (nota >= 5 && nota < 6) {
        return "Seu conceito é C+";

    } else if (nota >= 4 && nota < 5) {
        return "Seu conceito é C";

    } else if (nota >= 3 && nota < 4) {
        return "Seu conceito é D+";

    } else if (nota >= 2 && nota < 3) {
        return "Seu conceito é D";

    } else if (nota >= 1 && nota < 2) {
        return "Seu conceito é E+";

    } else if (nota <= 1 && nota > 0) {
        return "Seu conceito é E";

    } else if (nota == 0) {
        return "Seu conceito é F";

    } else {
        return "Nota inválida!!";
    }
}

let z = conceito(4.7);
console.log(z)

function exibirConceito(nota) {
    switch (Math.ceil(nota)) {
        case 10: return "A+";
        case 9: return "A"
        case 8: return "B+"
        case 7: return "B"
        case 6: return "C+"
        case 5: return "C"
        case 4: return "D+"
        case 3: return "D"
        case 2: return "E+"
        case 1: return "E"
        case 0: return "F"
        default: return null

    }
}

console.log(`O conceito de Fulano é: ${exibirConceito(7.5)}`)