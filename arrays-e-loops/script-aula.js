//for loop
for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

// while loop un
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
  //retorna de 0 a 9 no console
}

var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];
for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames [item]);
}

//break para parar o loop
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames [i]);
  if (videoGames[i] === 'PS4') {
    break;
  }
}

//foreach executa uma funcao para cada item da arrays
var frutas = ['banana', 'pera', 'maçã', 'abacaxi', 'uva'];
frutas.forEach(function (item, index, array) {
  console.log(item, index, array)
});