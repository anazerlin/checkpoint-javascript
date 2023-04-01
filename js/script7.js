function aviso()
{
    document.body.style.backgroundColor = 'green';
}

window.onload= function(){
    let botaoAviso = document.getElementById("button");

    botaoAviso.onclick = function () { 
        aviso() ;
    };
}