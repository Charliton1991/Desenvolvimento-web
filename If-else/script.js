/*trabalhando com condições if e else 
    objetivo- verificar atraves da media do aluno se ele foi aprovado ou reprovado
vamos considerar a media 7 para aprovação */


let media = 5;
let situacao = ''
if (media >= 7){
    situacao = 'aprovado';
}else if (media < 5) {
    situacao = 'reprovado'
 } else {
    situacao = 'recuperacao'
 }
 console.log(`Aluno ${situacao}. Sua media é ${media}`)


 /*let media = 8
 let situacao = ''
 if (media > 5 && media < 7){
 situacao = 'recuperacao'}
     outra maneira de calcular esse media*/  