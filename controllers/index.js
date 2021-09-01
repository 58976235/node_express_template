/*
 * @Author: your name
 * @Date: 2021-09-01 09:33:44
 * @LastEditTime: 2021-09-01 10:41:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node_express_template/controllers/index.js
 */
const dbconfig = require('../util/dbConfig/dbconfig_admin');
const TOKEN = require('../util/token/token');
const { log_out } = require('../public/javascripts/log_out')
test = (req, res) => {
    let name=req.query.name
    let Sql = ``;
    let SqlArr = [];
    res.send({
        name
    })
    /* let CallBack = (data) => {
        res.send({
            code: 200,
            data: {
                name:name
            },
            total: data.length
        })
        log_out.print("info", " 请求信息: " + JSON.stringify(data))
    }
    dbconfig.sqlConnect(Sql, SqlArr, CallBack); */
}
module.exports={
    test
}