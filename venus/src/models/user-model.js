const mongoose = require('mongoose'),
Schema = mongoose.Schema,
Promise = mongoose.Promise;

let UserSchema = new Schema({
    name: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false
    },
    password: {
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
UserSchema.methods.add = function() {
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
UserSchema.method.findByEmail = async function(email) {
    let self = this;
    let list = await this.find({}).populate({email: email});
    return list;
};

mongoose.model('User', UserSchema);