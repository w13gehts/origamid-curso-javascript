// mostre no console cada parágrafo do site
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach( (paragrafo) => {
  console.log(paragrafo);
});

// mostre o texto dos parágrafos no console
paragrafos.forEach( (paragrafo) => {
  console.log(paragrafo.innerText);
});

// como corrigir os erros abaixo: 
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( () => {
  console.log(i++)
})

imgs.forEach(() => i++);
console.log(i);