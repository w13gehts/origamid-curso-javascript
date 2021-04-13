// crie uma array com os anos que o brasil ganhou a copa 1959, 1962, 1970, 1994, 2002
var brasilCampeao = [1959, 1962, 1970, 1994, 2002];
console.log(brasilCampeao);

// interaja com o array utilizando um loop, moarar mostrar no console a seguinte mensagem, 'o brasil ganhou a copa de x ano'
for (var i = 0; i < brasilCampeao.length; i++) {
  console.log(`O Brasil ganhou a copa de ${brasilCampeao[i]}`);
}

// interaja com um loop nas frutas abaixo e pare ao chegar em pera
var frutas = ['banana', 'maçã', 'pera', 'uva', 'melancia']
for (var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if (frutas[fruta] === 'pera') {
    break;
  }
}
// coloque a ultima fruta do array acima em uma variavel, sem remover a mesma do array
var ultimaFruta = frutas[frutas.length - 1];
