const dbconfig = require('../util/dbConfig/dbconfig_admin');
const TOKEN = require('../util/token');
const { getNowTime } =require('../util/time')
const { log_out } = require('../util/printLog')
test = (req, res) => {
    let name=req.query.name
    let Sql = ``;
    let SqlArr = [];

    log_out.print('info',`${getNowTime()}:响应内容：${name}`)
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