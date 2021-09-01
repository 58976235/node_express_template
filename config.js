var config = {
    DBadmin: {   //后台管理数据库 --后台登录,日志,动态路由
        host: '192.168.0.252',  //192.168.0.221
        port: '3306',
        user: 'root',
        password: "root",  //root
        database: "admin"
    },
    listen: 3000,   //监听端口
};

module.exports = config;