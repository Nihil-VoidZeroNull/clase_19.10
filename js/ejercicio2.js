/*
 * EJERCICIO 2 
 * PROGRAMA QUE SOLICITE  DOS NÚMEROS E IMPIRMA LOS NúMEROS QUE SE ENCUENTRAN ENTRE ESOS DOS NÚMEROS INTRODUCIDOS POR EL USUARIO CONCATENANDO LA FRASE "ED-"
 * EJEMPLO INGRESO 1, 5.. IMPRIMA 2,3,4 
 */

var numeroUno = prompt("Introduzca numero 1: ", 0);
var numeroDos = prompt("Introduzca numero 2: ", 0);

numeroUno = parseInt(numeroUno);
numeroDos = parseInt(numeroDos);


if (numeroUno > numeroDos) {

    let n = numeroUno;
    numeroUno = numeroDos;
    numeroDos = n;

}

document.write('<h1> Numeros Ingresados: ' + numeroUno + ', ' + numeroDos + '</h1>');
console.log("Numeros Ingresados: " + numeroUno + ", " + numeroDos);


document.write('<ul>');

for (let i = (numeroUno + 1); i < numeroDos; i++) {

    console.log("ED-" + i);
    document.write('<li>' + 'ED-' + i + '</li>');
    
}

document.write('</ul>');
