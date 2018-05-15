const router = require('koa-router')()
const ActionHandler = require('../handlers/action.handler')

router.prefix('/actions')

router.post('/', async (ctx, next) => {
    const result = await ActionHandler.add(ctx)
    ctx.body = result
})

router.delete('/:ids', async (ctx, next) => {
    const result = await ActionHandler.delete(ctx)
    ctx.body = result
})

router.put('/:id', async (ctx, next) => {
    const result = await ActionHandler.update(ctx)
    ctx.body = result
})

router.get('/:id', async (ctx, next) => {
    const result = await ActionHandler.get(ctx)
    ctx.body = result
})

router.get('/', async (ctx, next) => {
    const result = await ActionHandler.list(ctx)
    ctx.body = result
})

module.exports = router