
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();

// console.log( process.argv );
// console.log( argv );
// console.log( 'num: yargs', argv.n );

// const [ , , arg3 = 'num=3' ] = process.argv;
// const [ , num = 3 ] = arg3.split('=');

crearArchivo( argv.n, argv.l, argv.h )
    .then( nombreArchivo => console.log( nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log( err ));