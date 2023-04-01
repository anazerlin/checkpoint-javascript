//EXERCÍCIO 3

let altura = parseFloat(prompt("Digite sua altura em metro"))
let peso = parseFloat(prompt("Digite seu peso"))
let IMC = peso/(altura ** 2)

if (IMC < 18.5) {
    console.log("Você está abaixo do peso");
} else if (IMC >= 18.5 && IMC <= 24.9) {
    console.log("Você está no peso ideal");
} else {
    console.log("Você está acima do peso");
}

// O comando perseFloat() é para transformar em float, igual o float() de Python
// O comando prompt() é a mesma coisa que o input()