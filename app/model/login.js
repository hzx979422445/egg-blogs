// app/model/login.js
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const UserSchema = new Schema({
        userName: {type: String},
        accountNumer: {type: String},
        password: {type: String},
        remark: {type: String}
    });
    return mongoose.model('Login', UserSchema, 'user');
}
