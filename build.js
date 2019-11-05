const Metro = require('metro');

Metro.loadConfig()
    .then(config => {
        Metro.runBuild(config, {
            entry: './src/javascript.js',
            out: './dist/javascript.js',
        });
    });