const imgs = document.querySelectorAll('img');

imgs.forEach(function(item, index, array) {
  console.log(array)
});

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

console.log(titulos);
console.log(titulosArray);

titulosArray.forEach(function(item, index, array) {
  console.log(item, index, array);
})

const imgs = document.querySelectorAll('img');

//para mais de um item
imgs.forEach((item, index) => {
  console.log(item, index)
})

//se tiver somente um item:
imgs.forEach(item => {
  console.log(item, index)
})

//se nao tiver nenhum argumento:
let i = 0;
imgs.forEach( () => {
  console.log(i++)
});

//quando só tem uma linha de código, pode-se executar da seguinte forma:
let i = 0;
imgs.forEach((item) => console.log(i++));