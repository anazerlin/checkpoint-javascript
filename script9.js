let peso = 57;
let altura = 1.70;
let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Você está abaixo do peso")
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Você está no peso ideal");
} else {
    console.log("Você está acima do peso");
}

console.log("\nSeu imc é igual a: " + imc)
