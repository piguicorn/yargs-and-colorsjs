const fs = require('fs');
const colors = require('colors');

const crear_archivo = async (base = 1, listar = false) => {
    let salida = '';
    try {
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${(base * i).toString().cyan} \n`;
        }
    
        fs.writeFileSync(`tabla-${base}.txt`, salida);

        if (listar) console.log(salida);

        return `La tabla del ${base} fue creada correctamente.`

    } catch(err) {
        return err;
    }
}

module.exports = {
    crear_archivo
}