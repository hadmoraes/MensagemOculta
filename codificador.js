var cifras = document.getElementById("escolhaCifra");
var codificar = document.querySelector('#codificar');
var decodificar = document.querySelector('#decodificar');
var campoCifra = document.querySelector('.cifraEscolha');
var incremento = document.createElement('input');
var incrementoLabel = document.createElement('label');
var lineBreak = document.createElement('br');

incremento.setAttribute('type','text');
incremento.setAttribute('name','incremento');
incremento.setAttribute('id', 'mensagem');
incrementoLabel.setAttribute('for','incremento');
incrementoLabel.innerText = 'Digite o incremento:';


cifras.addEventListener('change', function(){
    if(cifras.value == 'cesar'){
        campoCifra.append(incrementoLabel);
        campoCifra.append(lineBreak);
        campoCifra.append(incremento);
    }
});


