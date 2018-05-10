const Resp = require('../helpers/resp.js')
const Tag = require('../models/tag.model')
const User = require('../models/user.model')

class TagHandler {
    static async add (ctx) {
        const user = await User.verify(ctx.headers.authorization)
        if (user) {
            const data = ctx.request.body
            const doc = {
                code: data.code,
                name: data.name,
                desc: data.desc,
                tags: data.tags,
                author: user.id
            }
            let tag = await Tag.create(doc)
            if (tag) {
                return new Resp(200, 'success', {tag: tag}).toJson()
            }
        }
        return new Resp(200, 'failed').toJson()
    }

    static async delete(ctx) {
        const user = await User.verify(ctx.headers.authorization)
        if (user) {
            const ids = ctx.params.ids.split(',')
            let tag = await Tag.remove({'_id': {$in: ids}})
            if (tag) {
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
            let tag = await Tag.update({_id: ctx.params.id}, doc)
            if (tag) {
                return new Resp(200, 'success').toJson()
            }
        }
        return new Resp(200, 'failed').toJson()
    }

    static async get(ctx) {
        const tag = await Tag.findOne({_id: ctx.params.id})
        return new Resp(200, 'success', {tag: tag}).toJson()
    }

    static async list(ctx) {
        const data = ctx.query;
        const search = data.search
        let tags = []
        let count = await Tag.count()
        if (data.size && data.index && parseInt(data.size) > 0) {
            const size = parseInt(data.size)
            const index = parseInt(data.index)
            tags = await Tag.find().skip(size * (index - 1)).limit(size)
                .populate({path: 'author', select: '_id nickname', model: User}).exec()
        } else {
            tags = await Tag.find()
        }
        return new Resp(200, 'success', {tags: tags, count: count}).toJson()
    }
}

module.exports = TagHandler