// app/model/comment.js
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    //定义了表数据的类型
    const CommentSchema = new Schema({
        topic_id: { type: String },
        comment_user: { type: Object},
        reply_user:{type : Object},
        state: { type: Number,default: 0},
        content:{type : String },
        create_time:{type : String }
    });
    CommentSchema.statics = {
        /**
         * @param 查看评论详情
         */
        findCommentById:function(data){
            return this.find(data).then(res =>{
                return {
                    code:100000,
                    body:res
                };
            }).catch(err =>{
                return  {
                    code:100001,
                    body:err
                }
            })
        },
        /**
         * @param 创建评论并返回所有
         */
        createComment:function(data){

           return this.create(data).then(res =>{
               const topic_id = res.topic_id
                return this.find({"topic_id":res.topic_id}).then(res =>{
                    const obj = res;
                    const comment = res[res.length - 1]['_id'];
                    return app.model.Topic.update({'_id':topic_id},{'$push':{ comments : { comment: comment}}}).then(res =>{
                        return {
                            code:100000,
                            body:obj
                        };
                    }).catch(err =>{
                        return  {
                            code:100001,
                            body:err
                        }
                    })

                }).catch(err =>{
                    return  {
                        code:100001,
                        body:err
                    }
                })
            }).catch(err =>{
                return  {
                    code:100001,
                    body:err
                }
            })
        }
    }
    return mongoose.model('Comment', CommentSchema,'comment');
}
