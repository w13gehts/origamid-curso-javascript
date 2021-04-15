var pessoa = {
  nome: 'Juliana',
  idade: 27,
}

console.log(pessoa);

var quadrado = {
  lados: 4,
  area (lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
  cinco() {
    return 5;
  },
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));