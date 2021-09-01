const dbconfig = require('../util/dbConfig/dbconfig_admin');
const TOKEN = require('../util/token/token');
const { log_out } = require('../public/javascripts/log_out')
test = (req, res) => {
    
    let Sql = ``;
    let SqlArr = [];
    let CallBack = (data) => {
        res.send({
            code: 200,
            data: {
                data: data,
                total: data.length
            }
        })
        log_out.print("info", " 请求信息: " + JSON.stringify(data))
    }
    dbconfig.sqlConnect(Sql, SqlArr, CallBack);
}
module.exports={
    test
}