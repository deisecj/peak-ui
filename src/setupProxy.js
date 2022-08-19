const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      pathRewrite: function (path, req) { return path.replace('/api/', '/') },
      target: 'http://localhost:3001',
      changeOrigin: true,
    })
  );
};