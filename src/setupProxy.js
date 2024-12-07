const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // Adjust this path to match your API route
    createProxyMiddleware({
      target: 'https://api.example.com', // Replace with your API URL
      changeOrigin: true,
    })
  );
};
