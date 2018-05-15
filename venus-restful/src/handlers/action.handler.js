const Resp = require('../helpers/resp.js')
const Action = require('../models/action.model')
const User = require('../models/user.model')

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
            const ids = ctx.params.ids.split(',')
            let action = await Action.remove({'_id': {$in: ids}})
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
        return new Resp(200, 'success', {action: action}).toJson()
    }

    static async list(ctx) {
        const data = ctx.query;
        const search = data.search
        let actions = []
        let count = await Action.count()
        if (data.size && data.index && parseInt(data.size) > 0) {
            const size = parseInt(data.size)
            const index = parseInt(data.index)
            actions = await Action.find().skip(size * (index - 1)).limit(size)
                .populate({path: 'author', select: '_id nickname', model: User}).exec()
        } else {
            actions = await Action.find()
        }
        return new Resp(200, 'success', {actions: actions, count: count}).toJson()
    }
}

module.exports = ActionHandler