// app/service/topic.js
const Service = require('egg').Service;
const util = require('../public/js/util');

class TopicService extends Service {
    async list() {
        const ctx = this.ctx;
        const {type, title} = ctx.request.body
        const pageNo = ctx.request.header["page-number"];
        const pageSize = ctx.request.header["page-size"];
        if (type) {
            return ctx.model.Topic.findTopicList({
                type: type,
                title: new RegExp(title, 'i')
            }, Number(pageNo), Number(pageSize))
        } else {
            return ctx.model.Topic.findTopicList({title: new RegExp(title, 'i')}, Number(pageNo), Number(pageSize))
        }
    }

    async create() {
        const ctx = this.ctx;
        const requestBody = ctx.request.body;
        requestBody['upload_time'] = util.formatDate(new Date(), "yyyy-MM-dd hh:mm:ss");
        requestBody['comments'] = [];
        return ctx.model.Topic.createTopic(requestBody)
    }

    async show() {
        const ctx = this.ctx;
        const _id = ctx.params.id;
        return ctx.model.Topic.findTopicById({"_id": _id})
    }
}

module.exports = TopicService;
