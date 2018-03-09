const router = require('koa-router')()
// import ArticleCtrl from '../ctrls/article.ctrl'
const ArticleCtrl = require('../ctrls/article.ctrl')

router.prefix('/articles')

router.get('/', async (ctx, next) => {
    let result = await ArticleCtrl.list(ctx);
    await ctx.render('article/list', result);
})

router.get('/detail/:id', async (ctx, next) => {
    let result = await ArticleCtrl.get4Detail(ctx);
    await ctx.render('article/detail', result);
})

router.get('/create', async (ctx, next) => {
    await ctx.render('article/edit');
})
router.post('/create', async (ctx, next) => {
    let result = await ArticleCtrl.save(ctx);
    ctx.body = result;
})

router.get('/edit/:id', async (ctx, next) => {
    let result = await ArticleCtrl.get(ctx);
    await ctx.render('article/edit', result);
})
router.put('/edit', async (ctx, next) => {
    let result = await ArticleCtrl.save(ctx);
    ctx.body = result;
})
module.exports = router
