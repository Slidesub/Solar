const Router = require('koa-router');
const router = new Router();

const users = require('./user.route')
const login = require('./login.route')
const article = require('./article.route')
const tag = require('./tag.route')
const action = require('./action.route')
const permisson = require('./permisson.route')

router.prefix('/v1')
router.use(users.routes(), users.allowedMethods())
router.use(login.routes(), login.allowedMethods())
router.use(article.routes(), article.allowedMethods())
router.use(tag.routes(), tag.allowedMethods())
router.use(action.routes(), action.allowedMethods())
router.use(permisson.routes(), permisson.allowedMethods())

module.exports = router;