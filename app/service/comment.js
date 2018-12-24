// app/service/comment.js
const Service = require('egg').Service;
const util = require('../public/js/util');
class CommentService extends Service {
    async create() {
        const ctx = this.ctx;
        const requestBody = ctx.request.body;
        requestBody['create_time'] = util.formatDate(new Date(),"yyyy-MM-dd hh:mm:ss");
        return ctx.model.Comment.createComment(requestBody)
    }
    async show() {
        const ctx = this.ctx;
        const topic_id = ctx.params.id;
        return ctx.model.Comment.findCommentById({"topic_id":topic_id})
    }
}
module.exports = CommentService;
