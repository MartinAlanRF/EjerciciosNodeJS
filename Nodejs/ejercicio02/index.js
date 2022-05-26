// const nuevosLibros = require('./libros');

// console.log(nuevosLibros);
//Destructuración de variables
//La regla es que la variables se llamen igual a como fueron exportadas
const {libros, nombre, edad} = require('./libros.js');
console.log(`${libros} ${nombre} ${edad}`);