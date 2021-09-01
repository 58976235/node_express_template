const mysql = require("mysql2")
const config = require('../../config');
const { log_out } = require('../../public/javascripts/log_out')

const pool = mysql.createPool(config.DBadmin)

module.exports = {
    sqlConnect: function (sql, sqlArr, callBack) {
        pool.getConnection((err, conn) => {
            if (err) {
                log_out.print("./error.log", " : " + err)
                return;
            }
            /* 事件驱动回调 */
            conn.query(sql, sqlArr, (err, data) => {
                if (err) {
                    log_out.print("./error.log", " : " + err)
                } else {
                    callBack(data)
                }
                conn.release()
            });
        })
    }
}