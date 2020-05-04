const path = require('path')

module.exports = {
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    //tell webpack to run babel on every fil it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        //for async functions
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] } }]
                    ]
                }
            }
        ]
    }
}