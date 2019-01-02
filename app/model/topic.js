// app/model/topic.js
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    //定义了表数据的类型
    const TopicSchema = new Schema({
        type: {type: String, ref: 'Dictionary'},
        title: {type: String},
        user_id: {type: String, ref: 'User'},
        upload_time: {type: String},
        browse: {type: Number, default: 0},
        text: {type: String},
        comments: [{comment: {type: String, ref: 'Comment'}}],
    });
    TopicSchema.statics = {
        /**
         * @param 查询topic列表
         */
        findTopicList: function (data, pageNo, pageSize) {
            return this.find(data).populate([{
                path: 'user_id',
                select: 'user_img',
            }, {
                path: 'type',
            }, {
                path: 'comments.comment',
            }]).skip((pageNo - 1) * pageSize).limit(pageSize).then((list) => {
                let resData = {
                    code: 100000,
                    body: {
                        data: list,
                        curPage: pageNo
                    }
                }
                return this.find(data).then((list) => {
                    resData['body']['total'] = list.length
                    return resData;
                }).catch(err => {
                    return {
                        code: 100001,
                        body: err
                    }
                })
            }).catch(err => {
                return {
                    code: 100001,
                    body: err
                }
            })
        },
        /**
         * @param 创建topic
         */
        createTopic: function (data) {
            return this
                .create(data).then(res => {
                    return {
                        code: 100000,
                        body: {
                            "message": "创建成功",
                            "code": 100
                        }
                    };
                }).catch(err => {
                    return {
                        code: 100001,
                        body: err
                    }
                })
        },
        /**
         * @param 查看topic详情
         */
        findTopicById: function (data) {
            return this.find(data).then(res => {
                const browse = res[0].browse + 1;
                return this
                    .findOneAndUpdate(data, {$set: {"browse": browse}}, {new: true}).populate([{
                        path: 'user_id',
                    }, {
                        path: 'type',
                    }]).then(res => {
                        return {
                            code: 100000,
                            body: res
                        };
                    }).catch(err => {
                        return {
                            code: 100001,
                            body: err
                        }
                    })
            }).catch(err => {
                return {
                    code: 100001,
                    body: err
                }
            })
        }
    }
    return mongoose.model('Topic', TopicSchema, 'topic');
}
