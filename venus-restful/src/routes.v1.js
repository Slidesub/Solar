const Router = require('koa-router');
const router = new Router();

const index = require('./routes/index')
const users = require('./routes/user.route')
const login = require('./routes/login.route')

router.prefix('/v1')
module.exports = function (app) {
    router.use(index.routes(), index.allowedMethods())
    router.use(users.routes(), users.allowedMethods())
    router.use(login.routes(), login.allowedMethods())
    app.use(router.routes());
}