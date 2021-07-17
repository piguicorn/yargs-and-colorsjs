const fs = require('fs');
const { crear_archivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

const { base , listar, hasta} = argv;

console.clear();

crear_archivo(base, listar, hasta)
    .then((msg) => console.log(msg))
    .catch((err) => console.log(`No se pudo crear el archivo.\n` + err)) 
