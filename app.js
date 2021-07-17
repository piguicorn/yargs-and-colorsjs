const fs = require('fs');
const { crear_archivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

const { base , listar} = argv;

console.clear();

crear_archivo(base, listar)
    .then((msg) => console.log(msg))
    .catch((err) => console.log(`No se pudo crear el archivo.\n` + err)) 
