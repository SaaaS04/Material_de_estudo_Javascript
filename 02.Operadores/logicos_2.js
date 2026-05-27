const t1 = true;
const t2 = true;

let = comprarTv50 = t1 && t2; // AND
console.log('Vamos comprar a Tv de 50"? ' + (comprarTv50)); // AND

let comprarTv32 = t1 !== t2; // xor
console.log('Vamos comprar a Tv de 32"? ' + (comprarTv32)); // xor

let sorvete = t1 || t2;
console.log('Vamos comprar sorvete? ' + sorvete); 

let ficarEmCasa = !sorvete;
console.log('Vamos ficar em casa? ' + ficarEmCasa);
