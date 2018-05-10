const router = require('koa-router')()
const UploadHandler = require('../handlers/upload.handler')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.post('/upload', async (ctx, next) => {
  const result = await UploadHandler.upload(ctx);
  ctx.body = result;
})

module.exports = router
