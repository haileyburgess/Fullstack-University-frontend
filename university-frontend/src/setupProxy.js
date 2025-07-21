const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:3001",
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        "^/api": "/api" // Keep the /api prefix
      },
      onProxyReq: function (proxyReq, req, res) {
        // Add CORS headers
        proxyReq.setHeader("Access-Control-Allow-Origin", "*");
        proxyReq.setHeader(
          "Access-Control-Allow-Methods",
          "GET, POST, PUT, DELETE, PATCH, OPTIONS"
        );
        proxyReq.setHeader(
          "Access-Control-Allow-Headers",
          "Content-Type, Authorization"
        );
      },
      onProxyRes: function (proxyRes, req, res) {
        // Add CORS headers to response
        proxyRes.headers["Access-Control-Allow-Origin"] = "*";
        proxyRes.headers["Access-Control-Allow-Methods"] =
          "GET, POST, PUT, DELETE, PATCH, OPTIONS";
        proxyRes.headers["Access-Control-Allow-Headers"] =
          "Content-Type, Authorization";
      }
    })
  );
};
