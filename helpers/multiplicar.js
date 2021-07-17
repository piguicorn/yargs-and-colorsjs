const fs = require('fs');
const colors = require('colors');

const crear_archivo = async (base = 1, listar = false, hasta = 10) => {
    let salida, consola = '';
    
    try {
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i} \n`;
            consola += `${base} x ${i} = ${(base * i).toString().cyan} \n`;
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        if (listar) console.log(consola);

        return `La tabla del ${base} fue creada correctamente.`

    } catch(err) {
        return err;
    }
}

module.exports = {
    crear_archivo
}