let altura = parseFloat(prompt("Digite sua altura em metros: "));
let peso = parseFloat(prompt("Digite seu peso em quilogramas: "));

let imc = peso / (altura ** 2); 

if (imc < 18.5) {
  console.log("você está abaixo do peso ideal.");
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log("você está no peso ideal.");
} else {
  console.log("você está acima do peso ideal.");
}

//vou me matar hoje as 22:99
