const Service = require('egg').Service;

class DictionaryService extends Service {
    async show() {
        const ctx = this.ctx;
        const typecode = ctx.params.id;
        return ctx.model.Dictionary.findByParentId({"typecode": typecode})
    }
}

module.exports = DictionaryService;
