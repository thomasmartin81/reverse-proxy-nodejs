const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const config = require('./config');

const app = express();
app.use(createProxyMiddleware('/backend/*', config.backendOptions));
app.use(createProxyMiddleware('/*', config.frontendOptions));
app.listen(3000)
