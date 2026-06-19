window.alert(`Ola mundo`)
console.log('olá mundo - console log')
let nome = window.prompt('digite seu nome: ')
let paragrafo = document.getElementById('texto')
console.log(paragrafo)
paragrafo.innerHTML = `<p>Olá mundo receba o ${nome} como novo jogador</p>`
paragrafo.style.color = `red`