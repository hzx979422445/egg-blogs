const Controller = require('egg').Controller;

class CommentController extends Controller {
    /**
     * @param 查看评论列表
     * @method GET
     * @url hzx/v1/comment/:id
     */
    async show() {
        const ctx = this.ctx;
        ctx.body = await ctx.service.comment.show();
    }

    /**
     * @param 新增评论
     * @method POST
     * @url hzx/v1/comment/add
     */
    async create() {
        const ctx = this.ctx;
        ctx.body = await ctx.service.comment.create();
    }
}

module.exports = CommentController;
