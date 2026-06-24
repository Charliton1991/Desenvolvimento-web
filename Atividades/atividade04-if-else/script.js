let velocidade = 70;
let situacao = ''
if (velocidade <= 30) {
    console.log('Sua velocidade atual é ${velocidade} km/h  velocidade dentro do limite permitido')

} else if (velocidade > 60) {
    console.log('Sua velocidade atual é de ${velocidade} km/h velocidade excedeu o limite, use sempre cinto de segurança')
}