/*Verificar se o usuario pode ou nao votar 
menores de 16 anos nao votam 
entre 16  e 18 voto opcional
maiores de 18 voto obrigatorio 
acima de 70 voto opcional*/ 

let idade = 80;
 
if (idade < 16) {
    console.log('Nao vota!')
}else if(idade <18 || idade  >= 70) {
    console.log('voto opcional')
}else {
    console.log('voto obrigatorio')
}