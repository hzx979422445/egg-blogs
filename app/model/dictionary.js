// app/model/dictionary.js
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    //定义了表数据的类型
    const DictionarySchema = new Schema({
        code: { type: String },
        name: { type: String},
        typecode:{type : String },
        typename:{type : String }
    });
    return mongoose.model('Dictionary', DictionarySchema,'dictionary');
}
