'use strict';
// 引入egg-mongoose
const mongoose = require('mongoose');
module.exports = appInfo => {
    const config = exports = {};

    /*// 添加 view 配置，nunjucks是一个用来在服务器端渲染HTML的插件，用npm 安装即可
    exports.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks',
        },
    };*/
    //关闭csrf
    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true,
        },
        // 白名单
        domainWhiteList: ['http://localhost:8080']
    };
    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    };
    config.bodyParser = {
        jsonLimit: '1mb',
        formLimit: '1mb',
    },
    exports.mongoose = {
        url: 'mongodb://127.0.0.1:27017/ys',
        options: {},
    };
    // add your config here
    config.middleware = [];
    return config;
};
