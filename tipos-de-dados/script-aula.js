
var nome = 'Juliana';
var sobrenome = 'Salafia';
var nomeCompleto = nome + ' ' + sobrenome;
var idade = 27;
var time;
var simbolo = Symbol();

console.log(typeof nome, typeof idade, typeof time, typeof simbolo);
console.log(nomeCompleto);

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';
var frase2 = `Romario fez ${gols * 2} gols`;

console.log(frase, frase2); 