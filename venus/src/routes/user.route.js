const router = require('koa-router')()
const UserCtrl = require('../ctrls/user.ctrl')
const User = require('../models/user.model')

router.prefix('/api/users')

router.get('/', async (ctx, next) => {
    let result = await UserCtrl.list(ctx);
    ctx.body = result;
})

module.exports = router
