let temDinheiro = true;
let estaEnsolarado = true;
let carroEstaNaGaragem = true;

let resultadosE = '(AND) vai pro shopping? ';
resultadosE += temDinheiro && estaEnsolarado
console.log(resultadosE)

let resultadosOu = '(OR) vai pro shopping? ';
resultadosOu += estaEnsolarado || carroEstaNaGaragem
console.log(resultadosOu)

let resultadosNao = '(NOT) vai pro shopping? ';
resultadosNao += !temDinheiro
console.log(resultadosNao)

console.log(true !== true) // false
console.log(true !== false) // true
console.log(false !== true) // true
console.log(false != false) // false

console.log(!true); // true
console.log(!false); // false