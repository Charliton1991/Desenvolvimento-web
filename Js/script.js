function somar() {
    let valor1 = Number(document.getElementById('soma1').value)
    let valor2 = Number(document.getElementById('soma2').value)
    let Resultado = document.getElementById('resultadosoma')
    Resultado.innerHTML = `A soma entre ${valor1} e ${valor2} é igual a ${valor1 + valor2}.`
}

function subtrair() {
    let valor1 = Number(document.getElementById('sub1').value)
    let valor2 = Number(document.getElementById('sub2').value)
    let Resultado = document.getElementById('resultadosub')
    Resultado.innerHTML = `A subtração entre ${valor1} e ${valor2} é igual a ${valor1 - valor2}.`
}