const Article = require('../models/article.model')
const User = require('../models/user.model')
const Resp = require('../helpers/resp.js')

class ArticleHandler {
    static async add(ctx) {
        const user = await User.verify(ctx.headers.authorization)
        if (user) {
            const data = ctx.request.body
            const doc = {
                title: data.title,
                desc: data.desc,
                body: data.body,
                // tags: data.tags,
                author: user.id
            }
            let article = await Article.create(doc)
            if (article) {
                return new Resp(200, 'success', {article: article}).toJson()
            }
        }
        return new Resp(200, 'failed').toJson()
    }

    static async delete(ctx) {
        const user = await User.verify(ctx.headers.authorization)
        if (user) {
            let article = await Article.deleteOne({_id: ctx.params.id})
            if (article) {
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
                title: data.title,
                desc: data.desc,
                body: data.body,
                // tags: data.tags,
                author: user.id
            }
            let article = await Article.update({_id: ctx.params.id}, doc)
            if (article) {
                return new Resp(200, 'success').toJson()
            }
        }
        return new Resp(200, 'failed').toJson()
    }

    static async get(ctx) {
        const article = await Article.findOne({_id: ctx.params.id})
            .populate({path: 'author', select: '_id name nickname phone', model: User}).exec()
        return new Resp(200, 'success', {article: article}).toJson()
    }

    static async list(ctx) {
        const data = ctx.query;
        const pageSize = parseInt(data.pageSize);
        const pageIndex = parseInt(data.pageIndex);
        const artices = Article.list().skip(pagesize * (pageIndex - 1)).limit(pagesize)
        return new Resp(200, 'success', {artices: artices}).toJson()
    }

}

module.exports = ArticleHandler