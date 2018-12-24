// app/service/login.js
const Service = require('egg').Service;
class LoginService extends Service {
    async index() {
        const ctx = this.ctx;
        const {accountNumer , password} = ctx.request.body;
        let accountNumerFlag = false;
        let passwordFlag = false;
        let respnseData;
         return ctx.model.Login.find({}).then(res =>{
            if(res.length > 0){
                for(var i = 0; i < res.length; i++){
                   if(res[i].accountNumer == accountNumer){
                       respnseData = res[i];
                       accountNumerFlag = true;
                       break;
                   }
                }
                for(var i = 0; i < res.length; i++){
                    if(res[i].password == password){
                        passwordFlag = true;
                        break;
                    }
                }
                if(accountNumerFlag && passwordFlag){
                    return {
                        code:100000,
                        body:{
                            "message":respnseData,
                            "code":200
                        }
                    };
                }else if(!accountNumerFlag){
                    return {
                        code:100000,
                        body:{
                            "message":"账号不存在",
                            "code":300
                        }
                    };
                }else if(!passwordFlag){
                    return {
                        code:100000,
                        body:{
                            "message":"密码错误",
                            "code":400
                        }
                    };
                }

            }
        }).catch(err =>{
            return {
                code:100001,
                body:err
            }
        })
    }
}
module.exports = LoginService;
