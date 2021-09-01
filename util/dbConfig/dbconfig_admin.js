/*
 * @Author: your name
 * @Date: 2021-06-15 10:55:50
 * @LastEditTime: 2021-09-01 14:11:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node_express_template/util/dbConfig/dbconfig_admin.js
 */
const mysql = require("mysql2")
const config = require('../../config');
const { log_out } = require('../printLog')

const pool = mysql.createPool(config.DBadmin)

module.exports = {
    sqlConnect: function (sql, sqlArr, callBack) {
        pool.getConnection((err, conn) => {
            if (err) {
                log_out.print("error", " : " + err)
                return;
            }
            
            conn.query(sql, sqlArr, (err, data) => {
                if (err) {
                    log_out.print("error", " : " + err)
                } else {
                    callBack(data)
                }
                conn.release()
            });
        })
    }
}