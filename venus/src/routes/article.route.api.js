const router = require('koa-router')()
// import ArticleCtrl from '../ctrls/article.ctrl'
const ArticleCtrl = require('../ctrls/article.ctrl')

router.prefix('/api/articles')

router.get('/', async (ctx, next) => {
    let result = await ArticleCtrl.list(ctx);
    ctx.body = result;
})
router.post('/', async (ctx, next) => {
    let result = await ArticleCtrl.save(ctx);
    ctx.body = result;
})
router.get('/:id', async (ctx, next) => {
    let result = await ArticleCtrl.get(ctx);
    ctx.body = result;
})
router.put('/:id', async (ctx, next) => {
    let result = await ArticleCtrl.save(ctx);
    ctx.body = result;
})

module.exports = router
