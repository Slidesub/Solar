const PROXY_CONFIG = {
    "/api": {
        "target": "http://127.0.0.1:3000",
        "secure": false,
        "pathRewrite": {
            "^/api": ""
        },
        "changeOrigin": true,
        "logLevel": "debug",
        "bypass": function (req, res, proxyOptions) {
            req.headers["Access-Control-Allow-Origin"] = "yes";
        }
    }
}

// const PROXY_CONFIG = [
//     {
//         context: [
//             "/api",
//             "/proxy"
//         ],
//         "target": "http://127.0.0.1:3000",
//         "secure": false,
//         "pathRewrite": {
//             "^/api": ""
//         },
//         "changeOrigin": true,
//         "logLevel": "debug",
//         "bypass": function (req, res, proxyOptions) {
//             req.headers["Access-Control-Allow-Origin"] = "yes";
//         }
//     }
// ]

module.exports = PROXY_CONFIG;
