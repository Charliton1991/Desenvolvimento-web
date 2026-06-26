function verificar() {
    let velocidade = Number.parseInt(document.getElementById('velocidade').value);
    let resultado = document.getElementById('resultado')
     resultado.innerHTML = `<p>sua velocidade atual é ${velocidade} km/h</p>`
    if(velocidade > 80) {
       resultado.innerHTML += `<p>voce ultrapassou o limite de velocidade. vai receber uma multa por ser apressadinho</p>`     
    } else {
        resultado.innerHTML += `<p>voce esta dentro do limite de velocidade. boa viagem!</p>`
    }
    resultado.innerHTML += `use sempre o cinto de segurança.`
}
