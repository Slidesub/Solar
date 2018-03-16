const Article = require('../models/article.model')

class ArticleCtrl {
    // static async save(ctx) {
    //     let result = {};
    //     let data = ctx.request.body;
    //     let id = data.id || '';
    //     let doc = {
    //         title: data.title,
    //         body: data.body,
    //     };

    //     let article = null;
    //     if (id === '') {
    //         doc.create_at = Date.now();
    //         article = await Article.create(doc);
    //     } else if (id.match(/^[0-9a-fA-F]{24}$/)) {
    //         article = await Article.update({_id: data.id}, doc);
    //     }

    //     if (article) {
    //         result.code = 1;
    //         result.msg = 'save success';
    //         result.data = article;
    //     } else {
    //         result.code = -1;
    //         result.msg = 'save failed';
    //     }
    //     return result;
    // }
    static async list(ctx) {
        let result = {};
        let articles = await Article.find();
        if (articles) {
            result.code = 1;
            result.msg = 'list success';
            result.data = articles;
        } else {
            result.code = -1;
            result.msg = 'list failed';
        }
        return result;
    }
    static async get(ctx) {
        let result = {};
        let id = ctx.params.id || '';
        let article = null;
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            article = await Article.findOne({_id: id});
        }
        if (article) {
            result.code = 1;
            result.msg = 'get success';
            result.data = article;
        } else {
            result.code = -1;
            result.msg = 'get failed';
        }
        return result;
    }
    static async get4Detail(ctx) {
        let result = {};
        let id = ctx.params.id || '';
        let article = null;
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            article = await Article.findOne2Html({_id: id});
        }
        if (article) {
            result.code = 1;
            result.msg = 'get success';
            result.data = article;
        } else {
            result.code = -1;
            result.msg = 'get failed';
        }
        return result;
    }

    static async save(ctx) {
        let data = ctx.request.body;
        let doc = {
            title: data.title,
            desc: data.desc,
            body: data.body,
            tags: data.tags,
            created_at: Date.now(),
            updated_at: Date.now()
        };
        let article = await Article.create(doc);
        return {code: 1, msg: 'success', data: article};
    }
}

module.exports = ArticleCtrl