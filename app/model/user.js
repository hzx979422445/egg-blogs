// app/model/user.js
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    //定义了表数据的类型
    const UserSchema = new Schema({
        userName: {type: String},
        accountNumer: {type: String},
        password: {type: String},
        remark: {type: String},
        user_img: {type: String},
        collect: {type: Array}
    });
    return mongoose.model('User', UserSchema, 'user');
}
