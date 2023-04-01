function aviso()
{
    document.body.style.backgroundColor = 'green';
}

window.onload= function(){
    let botaoAviso = document.getElementById("botao");

    botaoAviso.onclick = function () { 
        aviso() ;
    };
}