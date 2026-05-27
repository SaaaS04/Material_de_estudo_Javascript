// 1 Funçao com parametro e return
function somar(a, b) {
    return a + b;
}

let resultado = somar(30, 56);
console.log(`O resultado final é: ${resultado}`);
console.log(`O resultado final é: ${somar(30, 56)}`);

// 2 Funçao com parametro e sem return
function exibirMultiplicacao(a, b) {
    console.log(a * b);
}

let z = exibirMultiplicacao();
exibirMultiplicacao(5, 5);
exibirMultiplicacao(5, 9);

// 3 Funçao sem parametro e com retorno
function retornarDataAtual() {
    return new Date();
}

console.log(retornarDataAtual());

// 4 Funçao sem parametro e sem retorno
function horaAtual() { 
    console.log(new Date().getHours());
}

horaAtual()