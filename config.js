/*
 * @Author: your name
 * @Date: 2021-06-04 14:30:08
 * @LastEditTime: 2021-09-01 14:05:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node_express_template/config.js
 */
const config = {
    DBadmin: {   //后台管理数据库 --后台登录,日志,动态路由
        host: '192.168.0.252',  //192.168.0.221
        port: '3306',
        user: 'root',
        password: "root",  //root
        database: "admin"
    },
    //允许跨域访问
    origin:['http://localhost:8081'],
    listen: 3000,   //监听端口
};

module.exports = config;