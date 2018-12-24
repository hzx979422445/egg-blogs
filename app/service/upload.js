// app/service/upload.js
//node.js 文件操作对象
const fs = require('fs');
//node.js 路径操作对象
const path = require('path');
const Service = require('egg').Service;
//故名思意 异步二进制 写入流
const awaitWriteStream = require('await-stream-ready').write;
//管道读入一个虫洞。
const sendToWormhole = require('stream-wormhole');
const uuid = require('node-uuid');

class UploadService extends Service {
    async create() {
        const ctx = this.ctx;
        const stream = await ctx.getFileStream();
        //新建一个文件名
        const filename = uuid.v1() + path
            .extname(stream.filename)
            .toLocaleLowerCase();
       /* if(! fs.existsSync()){
            fs.mkdirSync(path.join(this.config.baseDir,'app/public/uploads'));
        }*/
        const target = path.join(this.config.baseDir, 'app/public/uploads', filename);
        //生成一个文件写入 文件流
        const writeStream = fs.createWriteStream(target);
        try {
            //异步把文件流 写入
            await awaitWriteStream(stream.pipe(writeStream));
        } catch (err) {
            //如果出现错误，关闭管道
            await sendToWormhole(stream);
            throw err;
        }
        let hostname;
        if(this.config.cluster.listen.hostname == ""){
             hostname = '127.0.0.1';
        }else{
            hostname = this.config.cluster.listen.hostname;
        }
        return {
            code:100000,
            body:{
                "message":'http://'+hostname+":"+this.config.cluster.listen.port +'/public/uploads/' + filename,
            }
        }
    }
    async delete() {
        const ctx = this.ctx;
        const deleteData = ctx.request.body;
        if(deleteData.length > 0){
            for(var i = 0; i < deleteData.length; i++){
                const target = path.join(this.config.baseDir, 'app/public/uploads', deleteData[i]);
                fs.unlinkSync(target)
            }
        }
        return {
            code:100000,
            body:{
                "code":200,
            }
        }
    }
}
module.exports = UploadService;
