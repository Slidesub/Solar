const router = require('koa-router')()
const LoginHandler = require('../handlers/login.handler')

// import LoginCtrl from '../ctrls/login.ctrl'

router.post('/login', async (ctx, next) => {
  const result = await LoginHandler.login(ctx)
  ctx.body = result
})

router.post('/regist', async(ctx, next) => {
    const result = await LoginHandler.regist(ctx)
    ctx.body = result
})

router.get('/logout', async (ctx, next) => {
    ctx.body = 'logout';
})
module.exports = router
