const Resp = require('../helpers/resp.js')
const Action = require('../models/action.model')

class ActionHandler {
    static async add (ctx) {
        const user = await User.verify(ctx.headers.authorization)
        if (user) {
            const data = ctx.request.body
            const doc = {
                code: data.code,
                name: data.name,
                desc: data.desc,
                author: user.id
            }
            let action = await Action.create(doc)
            if (action) {
                return new Resp(200, 'success', {action: action}).toJson()
            }
        }
        return new Resp(200, 'failed').toJson()
    }

    static async delete(ctx) {
        const user = await User.verify(ctx.headers.authorization)
        if (user) {
            let action = await Action.deleteOne({_id: ctx.params.id})
            if (action) {
                return new Resp(200, 'success').toJson()
            }
        }
        return new Resp(200, 'failed').toJson()
    }

    static async update(ctx) {
        const user = await User.verify(ctx.headers.authorization)
        if (user) {
            const data = ctx.request.body
            const doc = {
                code: data.code,
                name: data.name,
                desc: data.desc,
                author: user.id
            }
            let action = await Action.update({_id: ctx.params.id}, doc)
            if (action) {
                return new Resp(200, 'success').toJson()
            }
        }
        return new Resp(200, 'failed').toJson()
    }

    static async get(ctx) {
        const action = await Action.findOne({_id: ctx.params.id})
            .populate({path: 'author', select: '_id name nickname phone', model: User}).exec()
        return new Resp(200, 'success', {action: action}).toJson()
    }

    static async list(ctx) {
        const data = ctx.query;
        const pageSize = parseInt(data.pageSize);
        const pageIndex = parseInt(data.pageIndex);
        const tags = Action.list().skip(pagesize * (pageIndex - 1)).limit(pagesize)
        return new Resp(200, 'success', {tags: tags}).toJson()
    }
}