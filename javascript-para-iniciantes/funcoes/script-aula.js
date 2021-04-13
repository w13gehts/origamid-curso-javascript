function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total);

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(51, 1.6));

function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Eu gosto do céu';
  } else if (cor === 'verde'){
    return 'Eu gosto de mato';
  } else {
    return 'Eu não gosto de cores';
  }
}

addEventListener('click', function() {
  console.log('clicou');
});

function terceiraIdade(idade) {
  console.log(typeof idade);
  if (typeof idade !=='number')
  {
    return 'Por favor preencha um numero'
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(80));

function faltaVisitar(paisesVisitados) {
var totalPaises = 193;
return `Falta visitar ${totalPaises - paisesVisitados} países`;
}

