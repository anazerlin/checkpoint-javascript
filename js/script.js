/* EXERCÍCIO 1 */

let variavel;
console.log(variavel); // saída: undefined


/* EXERCÍCIO 2 */

/*O operador % em JavaScript é conhecido como operador de módulo ou resto da divisão. 
Ele retorna o resto da divisão de dois números.
*/
let num1 = 10;
let num2 = 3;
let resultado = num1 % num2;
console.log(resultado); // saída: 1

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




/* EXERCÍCIO 6 */

let nota1 = parseFloat(prompt("Digite sua primeira nota:"))
let nota2 = parseFloat(prompt("Digite sua segunda nota:"))
let nota3 = parseFloat(prompt("Digite sua terceira nota:"))
let nota4 = parseFloat(prompt("Digite sua quarta nota:"))
let soma = (nota1 + nota2 + nota3 + nota4)
let media = soma / 4
console.log("Sua média é", media)

/* EXERCÍCIO 7 */

window.onload=function(){
    let botaoAviso = document.getElementById("botao");

    botaoAviso.onclick = function () { 
        document.body.style.backgroundColor = 'green';
    };
}