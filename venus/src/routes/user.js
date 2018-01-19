const router = require('koa-router')()
const userCtrl = require("../controllers/userCtrl")

router.prefix('/user')

router.get('/', async (ctx, next) => {
    await ctx.render('user/index', {})
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/signin', userCtrl.signin)

router.get('/dash', async (ctx, next) => {
    await ctx.render('user/dash', {
      user: ctx.cookies.get('user')
    })
})
module.exports = router
