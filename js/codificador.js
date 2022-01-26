var formulario = document.querySelector('form');
var inputUsuario = document.getElementById('mensagem');
var cifras = document.getElementById("escolhaCifra");
var codificar = document.getElementById('codificar');
var decodificar = document.getElementById('decodificar');
var campoCifra = document.querySelector('.cifraEscolha');
var incremento = document.createElement('input');
var incrementoNumero;
var incrementoLabel = document.createElement('label');
var lineBreak = document.createElement('br');
var btn = document.getElementById('botao');
var mensagemFinal = document.createElement('p');
var resposta = document.createElement('p');

incremento.setAttribute('type','number');
incremento.setAttribute('min','0');
incremento.setAttribute('name','incremento');
incremento.setAttribute('class', 'caixaEntrada');
incrementoLabel.setAttribute('for','incremento');
incrementoLabel.innerText = 'Escolha o incremento:';
resposta.setAttribute('class','resposta');
mensagemFinal.setAttribute('class', 'mensagemFinal');
mensagemFinal.innerText = 'Sua mensagem codificada é:';


function executaBase64(mensagem){
    if (btn.innerText == 'Codificar Mensagem!'){
       return btoa(mensagem);
    } else {
        return atob(mensagem);
    }
};

function executaCifraCesar(mensagem,incremento){
    if (btn.innerText == 'Codificar Mensagem!'){
        return codificaCesar(mensagem,incremento);
     } else {
         return decodificaCesar(mensagem,incremento);
     }
}

function codificaCesar(mensagem,incremento){
    var cryptoCaracter = 0;
    var cryptoMensagem = '';
    for (i=0; i<mensagem.length; i++){
        cryptoCaracter = mensagem.charCodeAt(i) + incremento;
        cryptoMensagem += String.fromCharCode(cryptoCaracter);
    }
    return cryptoMensagem
}

function decodificaCesar(mensagem,incremento){
    var decryptoCaracter = 0;
    var decryptoMensagem = '';
    for (i=0; i<mensagem.length; i++){
        decryptoCaracter = mensagem.charCodeAt(i) - incremento;
        decryptoMensagem += String.fromCharCode(decryptoCaracter);
    }
    return decryptoMensagem
}


codificar.addEventListener('click',function(){
    btn.innerText = 'Codificar Mensagem!';
    mensagemFinal.innerText = 'Sua mensagem codificada é:';
});

decodificar.addEventListener('click',function(){
    btn.innerText = 'Decodificar Mensagem!';
    mensagemFinal.innerText = 'Sua mensagem decodificada é:';
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

btn.addEventListener('click', function(event){
    event.preventDefault();
    if (cifras.value == 'base64'){
        resposta.innerText = executaBase64(inputUsuario.value);
        formulario.append(mensagemFinal);
        formulario.append(resposta);
    } else if (cifras.value == 'cesar'){
        incrementoNumero = Number(incremento.value);
        resposta.innerText = executaCifraCesar(inputUsuario.value, incrementoNumero);
        formulario.append(mensagemFinal);
        formulario.append(resposta);
    }
});




