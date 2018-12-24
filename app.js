module.exports = app =>{
    //自定义内容
    app.projectName = 'eggExample'
    app.beforeStart(async () => {
        //应用等待这个函数执行完成才会启动
        console.log('==app beforeStart==');
    });

    app.ready(async () =>{
        console.log('==app ready==');
    });

    app.beforeClose(async () => {
        console.log("==app beforeClose==");
    })
}
