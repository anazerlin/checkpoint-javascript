var divElemento = document.getElementById("ex8")

divElemento.addEventListener("mouseover", ()=>{
    divElemento.style.backgroundColor = 'pink'
    document.getElementById("ex8").innerHTML = "O mouse está sob a área do conteúdo";
})

divElemento.addEventListener("mouseleave", ()=>{
    divElemento.style.backgroundColor = 'lightgreen'
    document.getElementById("ex8").innerHTML = "O mouse está fora da área do conteúdo.!";
})