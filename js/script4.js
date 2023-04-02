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