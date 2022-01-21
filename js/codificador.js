var cifras = document.getElementById("escolhaCifra");
var codificar = document.getElementById('codificar');
var decodificar = document.getElementById('decodificar');
var campoCifra = document.querySelector('.cifraEscolha');
var incremento = document.createElement('input');
var incrementoLabel = document.createElement('label');
var lineBreak = document.createElement('br');
var btn = document.getElementById('botao');


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

codificar.addEventListener('click',function(){
    btn.innerText = 'Codificar Mensagem!';
});

decodificar.addEventListener('click',function(){
    btn.innerText = 'Decodificar Mensagem!';
});

btn.addEventListener('click', function(event){
    event.preventDefault();
})