const path = require('path');

const argv = require('minimist')(process.argv.slice(2));

let env = null;

switch (argv.env) {
    case 'production':
        env = 'webpack.config.prod';
        break;
    default:
        env = 'webpack.config.dev';

}


module.exports = require( path.resolve(__dirname,'cfg',env) );
