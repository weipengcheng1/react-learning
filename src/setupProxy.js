const {createProxyMiddleware} = require("http-proxy-middleware")


module.exports = function (app) {
    app.use(
        "/api", createProxyMiddleware({
            target: "http://localhost:5000", //请求转发给谁
            changeOrigin: true,  //控制服务器接收到得请求头host字段得值
            pathRewrite: {"^/api": "http://localhost:5000"} //重写请求路径
        }))
}