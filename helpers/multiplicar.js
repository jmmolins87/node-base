const fs = require('fs');
require('colors');

const crearArchivo = async( num=5, listar=true, hasta=10 ) => {
    try {
        if(listar) {
            console.log('============='.red);
            console.log(` Tabla del ${ num }`.blue);
            console.log('============='.red);
        }

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida  += (`${ num } x ${ i } = ${ num * i }\n`);
            consola += (`${ num } ${ 'x'.cyan } ${ i } ${ '='.cyan } ${ num * i }\n`);
        }

        if(listar) console.log( consola );

        fs.writeFileSync(`./out/tabla-${ num }.txt`, salida);
        return `tabla-${ num }.txt`;
        
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}