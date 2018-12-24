// app/model/login.js
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const UserSchema = new Schema({
        userName: { type: String  },
        accountNumer: { type: String},
        password:{type : String },
        remark:{type : String }
    });
    // 以上定义了表数据的类型
    /*mongoose.model('Login',UserSchema,'user').find({}, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })*/
    return mongoose.model('Login', UserSchema,'user');
}
