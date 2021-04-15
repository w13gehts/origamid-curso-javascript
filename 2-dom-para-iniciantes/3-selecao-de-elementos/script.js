// retorne no console todas as imagens do site
const img = document.querySelectorAll('img');
console.log(img);

// retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

// selecione todos os links internos
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelector('.animais-descricao h2');
console.log(h2Animais);

// selecione o ultimo p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1]);