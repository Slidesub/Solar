const router = require('koa-router')()
const fs = require('fs');
const os = require('os');
const path = require('path');

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
  const files = ctx.request.body.files.file
  const reader = fs.createReadStream(file.path);
  
  const stream = fs.createWriteStream(path.join(os.tmpdir(), Math.random().toString()));
  reader.pipe(stream);
  return 'success';
})

module.exports = router
