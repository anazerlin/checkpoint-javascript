
function mostraAviso()
{
    document.body.style.backgroundColor = 'green';
}

window.onload= function(){
    let botaoAviso = document.getElementById("botao");

    botaoAviso.onclick = function () { 
        mostraAviso() ;
    };
}