// app/controller/topic.js
const Controller = require('egg').Controller;

class TopicController extends Controller {
    /**
     * @param 查看讨论话题列表
     * @method POST
     * @url hzx/v1/topic/
     */
    async list() {
        const ctx = this.ctx;
        ctx.body = await ctx.service.topic.list();
    }
    /**
     * @param 新增讨论话题
     * @method POST
     * @url hzx/v1/topic/add
     */
    async create() {
        const ctx = this.ctx;
        ctx.body = await ctx.service.topic.create();
    }
    /**
     * @param 查看讨论话题详情
     * @method GET
     * @url hzx/v1/topic/:id
     */
    async show() {
        const ctx = this.ctx;
        ctx.body = await ctx.service.topic.show();
    }
}
module.exports = TopicController;
