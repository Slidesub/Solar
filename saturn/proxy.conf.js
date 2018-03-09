const PROXY_CONFIG = {
    "**": {
        "target": "",
        "secure": false,
        "changeOrigin": true,
        "logLevel": "debug",
        "bypass": function (req, res, proxyOptions) {
            req.headers["Access-Control-Allow-Origin"] = "yes";
        }
    }
}

module.exports = PROXY_CONFIG;
