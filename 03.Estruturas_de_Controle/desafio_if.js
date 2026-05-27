const nota = 8.9;
let conceito;

if (nota <= 10 && nota >= 9) {
    conceito = "A"
} else if (nota < 9 && nota >= 7) {
    conceito = "B";
}  else if (nota < 7 && nota >= 5) {
    conceito = "C";
} else if (nota < 5 && nota < 4.5) {
    conceito = "D";
} else if (nota >= 0 && nota < 4.5) {
    conceito = "F"
} console.log("Sua nota de conceito é: " + conceito)


// if (nota <= 10 && nota >= 9) {
//     console.log('Conceito: A');
// }

// if (nota < 9 && nota >= 7) {
//     console.log('Conceito: B');
// }

// if (nota < 7 && nota >= 5) {
//     console.log("Conceito: C");
// }

// if (nota < 5 && nota >= 4.5) {
//     console.log("Conceito: D");
// }

// if (nota >= 0 && nota <= 4.5) {
//     console.log("Conceito: F");
// } 