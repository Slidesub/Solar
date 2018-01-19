import mongoose from 'mongoose';
const UserModel = mongoose.model('User');
exports.signin = async (ctx, next) => {
    let username = ctx.request.body.username || '',
    password = ctx.request.body.password || '';
    if (username === "" && password === "") {
        ctx.cookies.set('user', username, {signed: true})
    }
    ctx.redirect('/user/dash');
}
// import mongoose from 'mongoose';
// const UserModel = mongoose.model('User');
// class UserCtrl {
//     static aysnc signin (ctx, next) {

//     }

//     static aysnc = signout(ctx, next) {
        
//     }
// }

// export default UserCtrl;