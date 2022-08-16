
//var calcular = document.getElementById('calc')


function calcular() {
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const res = document.getElementById('res')
    const imc = peso / ((altura)^2)

    if (nome == 0 || altura == 0 || peso == 0) {
        alert('Preenchimento inválido! Verifique.')
    } else{
        res.textContent = `Olá ${nome}, seu imc é de ${imc}`
    }
}

