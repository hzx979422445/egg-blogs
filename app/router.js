'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    /**
     * @param 字典管理
     */
    router.resources('dictionary', '/hzx/v1/dictionary', controller.dictionary);
    /**
     * @param 文件上传
     */
    router.post('upload', '/hzx/v1/upload', controller.upload.create);
    /**
     * @param 文件删除（冗余文件）
     */
    router.post('upload', '/hzx/v1/upload/delete', controller.upload.delete);
    /**
     * @param 登录接口
     */
    router.post('/hzx/v1/login', controller.login.index);
    /**
     * @param 用户管理
     */
    router.resources('user', '/hzx/v1/user', controller.user);
    /**
     * @param 话题管理
     */
    router.post('/hzx/v1/topic/', controller.topic.list);
    router.post('/hzx/v1/topic/add', controller.topic.create);
    router.get('/hzx/v1/topic/:id', controller.topic.show);
    /**
     * @param 评论管理
     */
    router.post('/hzx/v1/comment/add', controller.comment.create);
    router.get('/hzx/v1/comment/:id', controller.comment.show);
};
