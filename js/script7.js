function aviso()
{
    document.body.style.backgroundColor = 'grey';
}

window.onload= function(){
    let botaoAviso = document.getElementById("button");

    botaoAviso.onclick = function () { 
        aviso() ;
    };
}