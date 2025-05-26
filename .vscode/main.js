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
const tempoObjetivo2 = new Date("2025-12-05T00:00:00");
const tempoObjetivo3 = new Date("2025-12-05T00:00:00");
const tempoObjetivo4 = new Date("2026-01-05T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

contadores[0].textContent = calculaTempo(tempoObjetivo1);
function calculaTempo(tempoObjetivo){
let tempoAtual = a new Date();
let tempoFinal = tempoObjetivo - tempoAtual;
let segundos = Math.floor(tempoFinal/1000);
let minutos = Math.floor(segundos/60);
let horas = Math.floor(minutos/60);
let Dias = Math.floor(horas/24);

segundos %= 60;
minutos %=60;
horas %=24;

return Dias + " Dias "+ horas + " horas " + minutos + " minutos "  + segundos + " segundos ";

}
function atualizarCronometro(){
    for(let i= 0; i < contadores.length; i++){
        contadores[i].textContent = calculaTempo(tempos[i]);
    }
}
function comecaCronometro(){
    atualizarCronometro();
    setInterval(atualizarCronometro, 1000);

}
comecaCronometro();
