var formulario = document.querySelector('form');
var mensagem = document.getElementById('mensagem');
var cifras = document.getElementById("escolhaCifra");
var codificar = document.getElementById('codificar');
var decodificar = document.getElementById('decodificar');
var campoCifra = document.querySelector('.cifraEscolha');
var incremento = document.createElement('input');
var incrementoLabel = document.createElement('label');
var lineBreak = document.createElement('br');
var btn = document.getElementById('botao');
var resposta = document.createElement('div');

incremento.setAttribute('type','text');
incremento.setAttribute('name','incremento');
incremento.setAttribute('class', 'caixaEntrada');
incremento.setAttribute('id', 'mensagemIncremento');
incrementoLabel.setAttribute('for','incremento');
incrementoLabel.innerText = 'Digite o incremento:';
resposta.setAttribute('class','resposta');


function base64(mensagem){
    if (btn.innerText == 'Codificar Mensagem!'){
       return btoa(mensagem);
    } else {
        return atob(mensagem);
    }
};

codificar.addEventListener('click',function(){
    btn.innerText = 'Codificar Mensagem!';
});

decodificar.addEventListener('click',function(){
    btn.innerText = 'Decodificar Mensagem!';
});

btn.addEventListener('click', function(event){
    event.preventDefault();
    if (cifras.value == 'base64'){
        formulario.append(resposta);
        resposta.innerText = `Sua mensagem criptografada é:
        ${base64(mensagem.value)}`;
    }
});


cifras.addEventListener('change', function(){
    if(cifras.value == 'cesar'){
        campoCifra.append(incrementoLabel);
        campoCifra.append(lineBreak);
        campoCifra.append(incremento);
    } else{
        incrementoLabel.remove()
        lineBreak.remove();
        incremento.remove();
    }
});


