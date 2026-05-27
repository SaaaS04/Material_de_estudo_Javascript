const a = 10;
const b = 28;
const operacao = '?'; // + - * /

let resultado;

if (operacao === '+') {
    resultado = a + b;
} else if (operacao === '-') {
    resultado = a - b;
} else if (operacao === '*'){
    resutado = a * b;
} else if (operacao === '/'){
    resultado = a / b;
} else{
    resultado = 'Operacao inválida'
}
    console.log(resultado)
