const mongoose = require('mongoose'),
Schema = mongoose.Schema,
Promise = mongoose.Promise;

let ArticleSchema = new Schema({
    title: {
        type: String,
        required: false,
    },
    body: {
        type: String,
        required: false
    },
    icon: {
        type: String,
        required: false
    },
    create_date: {
        type: String,
        required: false
    },
    update_date: {
        type: String,
        required: false
    }
});
ArticleSchema.methods.add = function() {
    let self = this,
    p = new Promise();
    self.save(function(error, data) {
        if(error) {
            p.reject(error);
        }
        p.resolve(null, data);
    });
    return p;
}

mongoose.model('Article', ArticleSchema);