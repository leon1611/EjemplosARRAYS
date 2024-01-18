/*En base al resultado del ejercicio anterior agrupar en un array únicamente las
palabras que tengan mas de 3 letras. */

let phrase = 'La programación web es fundamental para el progreso';
alert(phrase)
let words = phrase.split(' ');
let words3 = words.filter(word => word.length > 3);
alert("Las palabras con mas de 3 son " +words3);
