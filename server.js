const Metro = require('metro');
const express = require('express');
const app = express();
const server = require('http').Server(app);

Metro.loadConfig()
    .then(async (config) => {
        const { middleware } = await Metro.createConnectMiddleware(config);

        const {server: { port }} = config;

        app.use('/', express.static('public'));
        app.use(middleware);

        server.listen(port);
    })