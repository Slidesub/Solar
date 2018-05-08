const Router = require('koa-router');
const router = new Router();

const index = require('./routes/index')
const router_v1 = require('./routes/routes.v1');

module.exports = function (app) {
    router.use(index.routes(), index.allowedMethods())
    router.use(router_v1.routes(), router_v1.allowedMethods())
    app.use(router.routes());
}