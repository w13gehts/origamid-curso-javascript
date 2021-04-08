var possuiGraduacao = false;
var possuiDoutorado = false;

if (possuiGraduacao) {
  console.log("Possui Graduação");
} else if (possuiDoutorado) {
  console.log("Possui Doutorado");
} else {
  console.log("Não possui graduação");
}

var nome ='';

if (nome) {
    console.log(nome);
} else {
    console.log('Nome não existe.')
}

var corFavorita = 'Roxo';

switch (corFavorita) {
    case 'Azul':
        console.log("Olhe para o céu");
        break;

    case 'Amarelo':
        console.log("Olhe para o sol");
        break;

    case 'Verde':
        console.log("Olhe para a floresta");
        break;
    default:
        console.log('Feche os olhos');
}