/*
 * @Author: your name
 * @Date: 2021-06-04 14:30:08
 * @LastEditTime: 2021-09-01 15:56:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node_express_template/config.js
 */
const config = {
    //后台管理数据库
    DBadmin: {   
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: "root",  //root
        database: "admin"
    },
    //允许跨域访问
    origin:['http://localhost:8081'],
    //日志大小  单位 M
    logSize:10,  
    //监听端口  
    listen: 3000,   
};

module.exports = config;