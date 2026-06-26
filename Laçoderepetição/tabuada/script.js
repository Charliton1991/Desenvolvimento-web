function tabuada() {
    var numero = Number(document.getElementById('multiplicacao').value)
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>Tabuada de ${multiplicacao}</p>`
    for(var cont = 0; cont <=10; cont ++) {
        resultado.innerHTML += `${multiplicacao} x {cont} = ${multiplicacao * cont}`
    }
}