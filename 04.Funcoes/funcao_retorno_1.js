function sempreRetornaUm() {
    return 1;
}

function textoOuNumero(retornarTexto) {
    // return retornarTexto ? "sou um texto" : 123;
    if (retornarTexto) {
        return "sou um texto";
    }
    
    return 123
}

let valor = sempreRetornaUm() + 999;
console.log(valor);

let t = textoOuNumero(true);
console.log(t)

console.log(textoOuNumero(false))