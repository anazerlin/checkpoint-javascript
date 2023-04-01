//EXERCÍCIO 4

let idade = parseInt(prompt("Digite sua idade para descobrir sua facha etária"))

if (idade < 12) {
    console.log("Criança");
} else if (idade >= 13 && idade <= 18) {
    console.log("Adolescente");
} else if (idade > 19 && idade <60) {
    console.log("Adulto");
} else {
    console.log("Idoso")
}