//verifique a distancia da primeira imagem em relaçao ao topo da pagina
const img = document.querySelector('img');
const imgTop = img.offsetTop;
console.log(imgTop);

// retorna a soma da largura de todas as imagens
function somaImgs() {
  const imgs = document.querySelectorAll('img');
  let soma = 0;

  imgs.forEach((img) => {
    soma = soma + img.offsetWidth;
  });

  console.log(soma);
}

window.onload = function () {
  somaImgs();
};

// verifique se os links da pagina possuem o minimo recomendado para telas utilizadas com o dedo (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;

  if(linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, 'Possui boa acessibilidade')
  } else {
    console.log(link, 'Não possui boa acessibilidade')
  }
});

console.log(links);

// se o brower for menor que 720px, adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width: 720px)').matches;
if (browserSmall) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}