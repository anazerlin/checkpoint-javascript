/* EXERCÍCIO 1 */

let variavel;
console.log(variavel); // saída: undefined


/* EXERCÍCIO 2 */

let num1 = 10;
let num2 = 3;
let resultado = num1 % num2;
console.log("O resto dos números é:", resultado); // saída: 1


/* EXERCÍCIO 3 */

let altura = parseFloat(prompt("Digite sua altura em metros:"))
let peso = parseFloat(prompt("Digite seu peso em Kg:"))
let imc = peso / (altura * altura)

if (imc < 18.5){
    console.log("Você está abaixo do seu peso ideal!")
}else if (imc > 24.9){
    console.log("Você está acima do seu peso ideal!")
}else{
    console.log("Parabéns! Você está no seu peso ideal!")
}

/* EXERCÍCIOS 4 */

let idade = parseInt(prompt("Digite sua idade:"))
if (idade <= 12){
    console.log("Você é uma criança.")
}else if (idade > 60){
    console.log("Você é um idoso.")
}else if (idade > 12 && idade <= 19){
    console.log("Você é um adolescente.")
}else{
    console.log("Você é um adulto.")
}


/* EXERCÍCIO 6 */

let nota1 = parseFloat(prompt("Digite sua primeira nota:"))
let nota2 = parseFloat(prompt("Digite sua segunda nota:"))
let nota3 = parseFloat(prompt("Digite sua terceira nota:"))
let nota4 = parseFloat(prompt("Digite sua quarta nota:"))
let soma = (nota1 + nota2 + nota3 + nota4)
let media = soma / 4
console.log("Sua média é", media)

if (media > 6){
    console.log("Você foi aprovado!")
}else{
    console.log("Você foi reprovado!")
}


/* EXERCÍCIO 7 */

window.onload=function(){
    let botaoAviso = document.getElementById("botao");

    botaoAviso.onclick = function () { 
        document.body.style.backgroundColor = 'green';
    };
}

/* EXERCÍCIO 8 */

var divElemento = document.getElementById("pg8")

divElemento.addEventListener("mouseover", ()=>{
    divElemento.style.backgroundColor = 'pink'
    document.getElementById("pg8").innerHTML = "O mouse está em cima do conteúdo!";
})

divElemento.addEventListener("mouseleave", ()=>{
    divElemento.style.backgroundColor = 'lightgreen'
    document.getElementById("pg8").innerHTML = "O mouse saiu do conteúdo!";
})

/* EXERCÍCIO 9 */

const box = document.querySelector('.box');

box.addEventListener('mouseover', () => {
	box.textContent = box.textContent === 'Olá' ? 'Tchau' : 'Olá';
	box.style.backgroundColor = box.style.backgroundColor === 'green' ? 'yellow' : 'green';
});
box.addEventListener('mouseout', () => {
	box.textContent = box.textContent === 'Tchau' ? 'Olá' : 'Tchau';
	box.style.backgroundColor = box.style.backgroundColor === 'yellow' ? 'green' : 'yellow';
});