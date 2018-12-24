// app/controller/upload.js
const Controller = require('egg').Controller;

class UploadController extends Controller {
    /**
     * @param 文件上传
     * @method POST
     * @url hzx/v1/upload
     */
    async create() {
        const ctx = this.ctx;
        ctx.body = await ctx.service.upload.create();
    }
    /**
     * @param 文件删除
     * @method DELETE
     * @url hzx/v1/upload
     */
    async delete() {
        const ctx = this.ctx;
        ctx.body = await ctx.service.upload.delete();
    }
}
module.exports = UploadController;
