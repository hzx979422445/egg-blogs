const Controller = require('egg').Controller;

class UserController extends Controller {
    /**
     * @param 新增用户
     * @method POST
     * @url hzx/v1/user
     */
    async create() {
        const ctx = this.ctx;
        ctx.body = await ctx.service.user.create();
    }

    /**
     * @param 修改用户
     * @method PUT
     * @url hzx/v1/user/:id
     */
    async update() {
        const ctx = this.ctx;
        ctx.body = await ctx.service.user.update();
    }

    /**
     * @param 查看用户详情
     * @method GET
     * @url hzx/v1/user/:id
     */
    async show() {
        const ctx = this.ctx;
        ctx.body = await ctx.service.user.show();
    }
}

module.exports = UserController;
