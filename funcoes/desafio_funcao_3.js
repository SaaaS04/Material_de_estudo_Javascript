const nota1 = 5.8;
const nota2 = 1.1;
const nota3 = 2.1;

function minimo(n1, n2) {
    return n1 <= n2 ? n1 : n2;
}

function media(n1, n2, n3) {
    const menorNota = minimo(n1, minimo(n2, n3));

    if (menorNota === n1) {
        return (n2 + n3) / 2;
    } else if (menorNota === n2) {
        return (n1 + n3) / 2;
    } else {
        return (n1 + n2) / 2;
    }
}

function status(media) {
    if (media >= 7) {
        return "Aprovado!!"
    } else if (media >= 4) {
        return "Recuperaçao!!"
    } else {
        return "Reprovado!!!!!!"
    }
}

const mediaFinal = media(nota1, nota2, nota3);
const statusFinal = status(mediaFinal)

console.log(statusFinal);


// function media(n1, n2) {
//     resultado = (n1 + n2) / media.length;
//     console.log(resultado)
// }

// function status() {
//     if (resultado >= 7){
//         console.log("Aprovado!!!")
//     } else if (resultado >= 4 && resultado < 7){
//         console.log("Recuperaçao")
//     } else{
//         console.log("Reprovado")
//     }
// }

// media(7.8, 6.7)
// status()