const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const config = require('./config');

const app = express();
app.use('/backend/*',createProxyMiddleware( config.backendOptions));
app.use('/angular/*', createProxyMiddleware( config.frontendOptions));
app.get('/*', function (req, res) {
    res.redirect('/angular/');
});

app.listen(3000, () =>  console.log(`ReverseProxy has been started at ${new Date()}`));

