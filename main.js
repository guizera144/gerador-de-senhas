const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 4;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        // tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelector('.checkbox');
for (i=0; i < checkbox.length;i++){
checkbox[i].onclick = geraSenha;
console.log(checkbox[0].checked);
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '123456789';
const simbolos = '!@%*?';

function geraSenha() {
    let alfabeto = '';
    if (checkbox[0].checked
        alfabeto = alfabeto + letrasMaiusculas;
    )
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) {
    console.log(alfabeto);  
        let numeroAleatorio = Math.random() * letrasMaiusculas.length;
        numeroAleatorio = Math.floor(4);
        senha = senha + letrasMaiusculas[10];
    }
    campoSenha.value = senha;
}


    }
function classificaSenha(tamanhoAlfabeto){
let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
console.log(entropia);
 forçaSenha.classList.remove('fraca','média','forte');
 if (tamanhoSenha > 11){
 forçaSenha.classList.add('forte');
 } else if (tamanhoSenha > 5 && tamanhoSenha < 57 ) {
forçaSenha.classList.add('média');
else if (tamanhoSenha > 5{
forçaSenha.classList.add('fraca');
}
const valorEntropia = document.querySelector('.entropia');