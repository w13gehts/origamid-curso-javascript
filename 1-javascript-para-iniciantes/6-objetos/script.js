// crie um objeto com seus dados pessoais
var dados = {
  nome: 'Juliana',
  sobrenome: 'Salafia',
  idade: 27,
  cidade: 'São Paulo',
  estado: 'SP'
}

//crie um metodo no objeto anterior, que mostre o seu nome completo 
dados.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`
}

//modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'audi'
}

carro.preco = 3000;

//crie um objeto de um cachorro que represente um labrador preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa) {
    if (pessoa === 'homem') {
      return 'woof woof';
    } else {
      return 'Nada';
    }
  }
}