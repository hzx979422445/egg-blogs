const Controller = require('egg').Controller;

class LoginController extends Controller {
    /**
     * @param 用户登录
     * @method POST
     * @url hzx/v1/login
     */
    async index() {
        const ctx = this.ctx;
        ctx.body = await ctx.service.login.index();
    }
}

module.exports = LoginController;
