
let altura = parseFloat(prompt("Digite sua altura em metros:"))
let peso = parseFloat(prompt("Digite seu peso em Kg:"))
let imc = peso / (altura * altura)

if (imc < 18.5){
    console.log("Você está abaixo do seu peso ideal!")
}else if (imc > 24.9){
    console.log("Você está acima do seu peso ideal!")
}else{
    console.log("Você está no seu peso ideal!")
}