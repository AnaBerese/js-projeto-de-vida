const botoes = document.querySelectorAll(".botao")
const textos = document.querySelectorAll(".aba-conteudo")


for(let i = 0 i<botoes.length; i++){
    botoes[i].onclick =fumction(){
        for(let j = 0; j< botoes.length;j++){
const botoes = document.querySelectorAll(".botao")
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");

        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");

    }
}
const contadores = document.querySelectorAll(".contador")
const tempoObjetivo1 = new Date("2025-10-05T00:00:00");

contadores[0].textContent = calculaTempo(tempoObjetivo1);
function calculaTempo(tempoObjetivo){
let tempoAtual = a new Date();
let tempoFinal = tempoObjetivo - tempoAtual;
}

