// app/service/user.js
const Service = require('egg').Service;
const fs = require('fs');
const path = require('path');
class UserService extends Service {
    async create() {
        const ctx = this.ctx;
        const {accountNumer , password} = ctx.request.body;
        return ctx.model.User.find({"accountNumer":accountNumer}).then(res =>{
            if(res.length == 0){
                return ctx.model.User.create(
                    {
                        userName:accountNumer,
                        accountNumer: accountNumer,
                        password: password,
                    }
                ).then(res =>{
                    return {
                        code:100000,
                        body:{
                            "message":"注册成功",
                            "code":100
                        }
                    };
                }).catch(err =>{
                     return  {
                        code:100001,
                        body:err
                    }
                })
            }else{
                return {
                    code:100000,
                    body:{
                        "message":"账号已存在",
                        "code":1
                    }
                };
            }
        }).catch(err =>{
            return {
                code:100001,
                body:{
                    "message":err,
                    "code":1
                }
            }
        })
    }
    async update() {
        const ctx = this.ctx;
        const _id = ctx.params.id;
        const requsetData = ctx.request.body;
        return ctx.model.User.find({"_id":_id}).then(res =>{
            if(res[0].user_img != "" && res[0].user_img != undefined && requsetData.isDeleteImg){
                const url = res[0].user_img;
                const urlTwo = url.substring(url.lastIndexOf('/') + 1, url.length);
                const target = path.join(this.config.baseDir, 'app/public/uploads',urlTwo);
                fs.unlinkSync(target)
            }
            return ctx.model.User.findOneAndUpdate({"_id":_id},requsetData,{new:true}).then(res =>{
                return {
                    code:100000,
                    body:{
                        "message":res,
                        "code":200
                    }
                }
            }).catch(err =>{
                return {
                    code:100001,
                    body:{
                        "message":err
                    }
                }
            })

        }).catch(err =>{
            return {
                code:100001,
                body:{
                    "message":err
                }
            }
        })


    }
    async show() {
        const ctx = this.ctx;
    }
}
module.exports = UserService;
