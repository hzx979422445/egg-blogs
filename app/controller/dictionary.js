// app/controller/dictionary.js
const Controller = require('egg').Controller;

class DictionaryController extends Controller {
    /**
     * @param 查看字典id对应数据
     * @method GET
     * @url hzx/v1/dictionary/:id
     */
    async show() {
        const ctx = this.ctx;
        ctx.body = await ctx.service.dictionary.show();
    }
}
module.exports = DictionaryController;
