// app/service/dictionary.js
const Service = require('egg').Service;

class DictionaryService extends Service {
    async show() {
        const ctx = this.ctx;
        const typecode = ctx.params.id;
        return ctx.model.Dictionary.find({"typecode":typecode}).then(res =>{
            return {
                code:100000,
                body:{
                    "message":res,
                }
            }
        }).catch(err =>{
            return {
                code:100001,
                body:{
                    "message":err
                }
            }
        })
    }
}
module.exports = DictionaryService;
