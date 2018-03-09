const mongoose = require('mongoose')
const Schema = mongoose.Schema
const markdown = require('markdown').markdown

const ArticleSchema = new Schema({
    title: {
        type: String,
        unique: false,
        require: false
    },
    body: {
        type: String,
        unique: false,
        require: false
    },
    // tags : {
    //     type: [ObjectId],
    //     unique: false,
    //     require: false
    // },
    icon : {
        type: String,
        unique: false,
        require: false
    },
    author: {
        type: Schema.Types.ObjectId,
        unique: false,
        require: false
    },
    create_at: {
        type: Date,
        unique: false,
        require: false
    },
    update_at: {
        type: Date,
        unique: false,
        require: false,
        default: Date.now()
    }
});

// ArticleSchema.post('findOne', function (article, next) {
//     article.body = markdown.toHTML(article.body);
//     next();
// });

ArticleSchema.statics.findOne2Html = async function (params) {
    let that = this;
    let article = await that.findOne(params);
    if (article) {
        article.body = markdown.toHTML(article.body);
    }
    return article;
}
module.exports = mongoose.model('Article', ArticleSchema);