const Router = require('koa-router');
const router = new Router();

const users = require('./user.route')
const login = require('./login.route')
const article = require('./article.route')
const tag = require('./tag.route')

router.prefix('/v1')
router.use(users.routes(), users.allowedMethods())
router.use(login.routes(), login.allowedMethods())
router.use(article.routes(), article.allowedMethods())
router.use(tag.routes(), tag.allowedMethods())

module.exports = router;