const Resp = require('../helpers/resp.js')
const Tag = require('../models/tag.model')

class TagHandler {
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
            let tag = await Tag.deleteOne({_id: ctx.params.id})
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
        const pageSize = parseInt(data.pageSize);
        const pageIndex = parseInt(data.pageIndex);
        const tags = Tag.list().skip(pagesize * (pageIndex - 1)).limit(pagesize)
        return new Resp(200, 'success', {tags: tags}).toJson()
    }
}

module.exports = TagHandler