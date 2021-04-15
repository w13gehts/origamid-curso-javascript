const menu = document.querySelector('.menu');
menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');
// menu.classList.toggle('azul');

if(menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul');
}

//atributos
const animais = document.querySelector('.animais');
console.log(animais.attributes[0]);

const img = document.querySelector('img');
console.log(img.getAttribute('src'));

//pode colocar numa variavel tambem
const srcImg = img.getAttribute('alt');
console.log(srcImg);

//atualiza
img.setAttribute('alt', 'é uma raposa');

const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt);