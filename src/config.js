module.exports.backendOptions = {
    target: 'http://localhost:8080',
    changeOrigin: true,
    pathRewrite: {
        '^/backend': '/',
    },
    onProxyReq(proxyReq, req, res) {
    },
    onProxyRes(proxyRes, req, res) {
    }
};

module.exports.frontendOptions = {
    target: 'http://localhost:4200',
    changeOrigin: true,
};
