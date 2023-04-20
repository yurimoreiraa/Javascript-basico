console.log('Olá, Javascript!')

var userName = 'Yuri Moreira'

document.getElementById('user-name').innerHTML = userName

//Variáveis//

// var nome = 'Mestre Yoda'
// var idade = 100
// var jedi = true

// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof jedi)

//Operadores matemáticos//

//var n1 = 7
//var n2 = 2.5

//console.log(typeof n1)
//console.log(typeof n2)

//var total = n1 / n2
//console.log(total)

//Operadores de comparação//

//var v1 = 5
//var v2 = 5

//var resultado = v1 != v2
//console.log(resultado)

//Função//

//function soma (n1, n2) {
//    console.log(n1 + n2)
//}

//soma (5, 5)

//function boasVindas (nome) {
//    alert(nome + ', Seja bem-vindo(a)')
//}

//boasVindas ('Yuri Moreira')

//soma (n1, n2) {
//    return n1 + n2
//}

//var resultado = soma (5, 100)
//console.log(resultado)

// Controle de fluxos//

/* var saldo = 1000

function saque(valor) {

    if (valor > saldo) {
        console.log('Valor do saque superior ao saldo')
    } else if ((valor > 700)) {
        console.log('Valor do saque ultrapassou o limite diário de R$ 700,00.')
    } else {
        saldo = saldo - valor
    }
   
    }

saque (1000)
console.log(saldo) */

// Arrays //

/* var personagens = ['Mestre Yoda', 'Luke Skywalter', 'Princesa Leia', 'Darth Vader']

personagens.push('C3PO')
personagens.push('R2D2')

//personagens.pop()

personagens = personagens.filter(function(p){
    return p !== 'Darth Vader'
})
personagens = personagens.filter(function(p){
    return p === 'Mestre Yoda'
})
console.log(personagens) */

// Controles de repetição (Loops) //

// var personagens = ['Mestre Yoda', 'Luke Skywalter', 'Princesa Leia', 'Darth Vader']

/* personagens.forEach(function(p){
    console.log(p)
}) */

/* for (var i in personagens) {
    console.log(personagens[i])
} */

/* for (var i = 0; i <= 10; i++) {
    console.log(i)
} */

// Objetos //

/* var yoda = {
    nome: 'Mestre Yoda',
    idade: 100,
    jedi:  true,
    mostraIdade: function() {
        console.log(`A idade do ${this.nome} é ${this.idade} anos.`)
    }
}

yoda.nome = 'Mestre Yoda'
yoda.idade = 100
yoda. jedi = true

console.log(yoda)
yoda.mostraIdade() */

// Constantes //

const nome = 'Darth Vader'
console.log(nome)

nome = 'Mestre Yoda'
console.log(nome)
