import {colegio} from './colegio.js';

//Ejemplos
//Ej1
var colegio1= new colegio("IES Paco Molla", 12, 5);

colegio1.addAlumnoNuevo("20917649T", 'Jemima', 9,2);
colegio1.addAlumnoNuevo("65485312D", 'Jose Miguel', 7,5);

console.log(colegio1.obtenerMedia());

//Ej2
var colegio2= new colegio("IES Torrellano", 5, 3);

colegio2.addAlumnoNuevo('1254865', 'Ana', 9);
colegio2.addAlumnoNuevo('33333333', 'Manuel', 8);
colegio2.addAlumnoNuevo('3334533', 'Maria', 7);
colegio2.addAlumnoNuevo('3345843', 'Miriam', 8);
colegio2.addAlumnoNuevo('5', 'Francisco', 23);

console.log(colegio2.obtenerMedia());

colegio2.modificarMediaAlumno('Maria', 9);

console.log(colegio2.obtenerMedia());