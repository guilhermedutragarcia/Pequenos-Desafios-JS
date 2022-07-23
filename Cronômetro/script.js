var hora = 0
var minutos = 0
var segundos = 0

//var tempo = 1000 // quantos milesimos vale um segundo
var cron

function começar() {
    cron = setInterval(timer, 1000)
}

function parar() {
    clearInterval(cron)

}
function resetar() {
    clearInterval(cron)
    hora = 0
    minutos = 0 
    segundos = 0
    document.getElementById('contador').innerText='00:00:00'

}
function timer() {
    segundos++ 

    if(segundos == 60){
        segundos = 0
        minutos++

        if(minutos == 60) {
            minutos = 0
            hora++
        }
    }

    var formato = (hora < 10 ? '0' + hora : hora) + ':' + (minutos < 10 ? '0' + minutos : minutos) + ':' +(segundos < 10 ? '0' + segundos : segundos)
    document.getElementById('contador').innerHTML = formato
}