var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist.browser/built');
var APP_DIR = path.resolve(__dirname, 'src');

var configs = [
    {
        entry: APP_DIR + '/index.ts',
        output: {
            path: BUILD_DIR,
            filename: 'index.js'
        },
        module: {
            rules: [
                { 
                  test: /\.ts?$/, 
                  loader: 'awesome-typescript-loader'
                }
              ]
        },
        resolve: {
            extensions: ['.ts', '.js', '.jsx']
        }
    }
];

module.exports = configs;
