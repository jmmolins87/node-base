const argv = require('yargs')
    .option('n', {
        alias: 'num',
        type: 'number',
        demandOption: true,
        describe: 'Número a multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: true,
        describe: 'Listar la tabla de multiplicar en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: false,
        describe: 'Listar la tabla de multiplicar hasta cierto número'
    })
    .check(( argv, options ) => {
        if( isNaN( argv.n ) ){
            throw 'El argumento debe ser un número';
        }
        return true;
    })
    .argv;


module.exports = argv;