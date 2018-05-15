const Resp = require('../helpers/resp.js')
const Permission = require('../models/permission.model')
const User = require('../models/user.model')

class PermissonHandler {
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
            let permission = await Permission.create(doc)
            if (permission) {
                return new Resp(200, 'success', {permission: permission}).toJson()
            }
        }
        return new Resp(200, 'failed').toJson()
    }

    static async delete(ctx) {
        const user = await User.verify(ctx.headers.authorization)
        if (user) {
            const ids = ctx.params.ids.split(',')
            let permission = await Permission.remove({'_id': {$in: ids}})
            if (permission) {
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
            let permission = await Permission.update({_id: ctx.params.id}, doc)
            if (permission) {
                return new Resp(200, 'success').toJson()
            }
        }
        return new Resp(200, 'failed').toJson()
    }

    static async get(ctx) {
        const permission = await Permission.findOne({_id: ctx.params.id})
        return new Resp(200, 'success', {permission: permission}).toJson()
    }

    static async list(ctx) {
        const data = ctx.query;
        const search = data.search
        let permissions = []
        let count = await Permission.count()
        if (data.size && data.index && parseInt(data.size) > 0) {
            const size = parseInt(data.size)
            const index = parseInt(data.index)
            permissions = await Permission.find().skip(size * (index - 1)).limit(size)
                .populate({path: 'author', select: '_id nickname', model: User}).exec()
        } else {
            permissions = await Permission.find()
        }
        return new Resp(200, 'success', {permissions: permissions, count: count}).toJson()
    }
}

module.exports = PermissonHandler