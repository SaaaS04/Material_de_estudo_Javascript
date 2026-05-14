const t1 = true;
const t2 = true;

let = comprarTv50 = t1 && t2; // AND: só compra se tiver dinheiro e a Tv estiver na promoção
console.log('Vamos comprar a Tv de 50"? ' + (comprarTv50)); // AND

let comprarTv32 = t1 !== t2; // xor: compra se tiver dinheiro ou a Tv estiver na promoção, mas não os dois ao mesmo tempo
console.log('Vamos comprar a Tv de 32"? ' + (comprarTv32)); // xor

let sorvete = t1 || t2;
console.log('Vamos comprar sorvete? ' + sorvete); 

let ficarEmCasa = !sorvete;
console.log('Vamos ficar em casa? ' + ficarEmCasa);
