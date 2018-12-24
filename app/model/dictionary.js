// app/model/dictionary.js
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    //定义了表数据的类型
    const DictionarySchema = new Schema({
        code: {type: String},
        name: {type: String},
        typecode: {type: String},
        typename: {type: String}
    });
    DictionarySchema.statics = {
        findByParentId: function (data) {
            return this.find(data).then(res => {
                return {
                    code: 100000,
                    body: {
                        "message": res,
                    }
                }
            }).catch(err => {
                return {
                    code: 100001,
                    body: {
                        "message": err
                    }
                }
            })
        }
    }
    return mongoose.model('Dictionary', DictionarySchema, 'dictionary');
}
