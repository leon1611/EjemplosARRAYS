/*Separar por palabras y mostrar cuantas palabras tiene la siguiente frase:
let phrase = 'La programación web es fundamental para el progreso*/


let phrase = `La programación web es fundamental para el progreso`;
alert(phrase);
let words = phrase.split(' ');
alert(`La frase tiene ${words.length} palabras.`);
