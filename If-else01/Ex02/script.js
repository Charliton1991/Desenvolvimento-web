/*Verificar a hora do dia e imprimir uma saudacao */

let hora = new Date() .getHours()
console.log('agora sao exatamente ${hora} horas.')
if (hora < 12) {
    console.log('bom dia!')
}else if (hora <=18) {
    console.log('Boa tarde!')
}else {
    console.log('boa noite!')
}


