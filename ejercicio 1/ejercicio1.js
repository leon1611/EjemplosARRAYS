/*Ingresar un nombre con promp y verificar si el nombre ingresado se encuentra en el
vector
let students = ["Juan","Jose","Pedro","Maria","Alejandra"];
//Mostrar en un alert: "Si se encuentra" o "No se encuentra" */


let students = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];
alert(students);

let newName= prompt("Ingrese un nombre:");

if (students.includes(newName)) {
    alert('Si se encuentra');
} else {
    alert("No se encuentra.");
}
