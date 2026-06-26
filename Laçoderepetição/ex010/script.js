/* array - listas*/

let lista = [];//lista vazia
let idade = [2, 5, 9, 10, 15]
let nomes =['jaderson', 'pedro', 'thiago', 'joão']

console.log(lista)
console.log(idade [4])//dessa foma mostra apenas a idade 
console.log(nomes [3])//desse forma mostra so o indice 3

console.log(`o tamanho da lista nomes é ${nomes.length}`)//lenght retorna o numero de nomes na lista

for (var cont = 0; cont <= 3; cont++) {
    console.log(`usuario - ${nomes[cont]}`)
}

for (var n in nomes) {
    console.log(`usuario - ${nomes[n]}`)//forma mais usada de 

}
lista.unshift//adiciona um valor no inicio do array/lista


lista.push(67) //adiciona um valor no final do array/lista

lista.pop()//remove o ultimo elemento da lista
lista.shift()//remove o primeiro elemento da lista
lista.sort()//classificar em ordem crescente
lista.reverse()//classificar em ordem decrescente
lista.splice()//
console.log(nomes)

console.log(nomes.indexOf('jaderson'))

var cadastro = [
    ['jaderson', 73, 36],
    ['adilene', 47, 22]
]
console.log(cadastro[0][2])