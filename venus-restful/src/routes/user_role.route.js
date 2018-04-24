const router = require('koa-router')()
const UserRoleHandler = require('../handlers/user_role.handler')

router.prefix('/user_role')

router.post('/', async (ctx, next) => {
    const result = await UserRoleHandler.add(ctx)
    ctx.body = result
})

router.delete('/:id', async (ctx, next) => {
    const result = await UserRoleHandler.delete(ctx)
    ctx.body = result
})

router.put('/:id', async (ctx, next) => {
    const result = await UserRoleHandler.update(ctx)
    ctx.body = result
})

router.get('/:id', async (ctx, next) => {
    const result = await UserRoleHandler.get(ctx)
    ctx.body = result
})

router.get('/', async (ctx, next) => {
    const result = await UserRoleHandler.list(ctx)
    ctx.body = result
})

module.exports = router

// ctx.query
// ctx.params
// ctx.request.body