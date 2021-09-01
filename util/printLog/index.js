/*
 * @Author: your name
 * @Date: 2021-06-04 11:54:50
 * @LastEditTime: 2021-09-01 13:41:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node_express_template/public/javascripts/log_out.js
 */
const fs = require('fs');
/**
 * @name: 打印日志
 * @param {*}
 * @return {*}
 */
class GenerateLog {
    constructor() {
        this.options = {
            flags: 'a', // 
            encoding: 'utf8', // utf8编码
        }
        this.isResetR={
            './error.log':false,
            './info.log':false
        }
    }
    /**
     * @name: 打印日志
     * @param { string } string 日志名 （info，error）
     * @param { string } 日志内容
     * @return {*}
     */    
    print(pathStr, info) {
        let path="./"+pathStr+".log"
        let stderr = fs.createWriteStream(path, this.options)
        let _log_Out = new console.Console(stderr);
        let __this=this
        try {
            fs.accessSync(path, fs.F_OK);
        } catch (e) {
            _log_Out.log(info)
            return '文件不存在';
        }
        fs.stat(path, function (error, stats) {
            if (error) {
                return "file size error";
            } else {
                if (stats.size > 10485760) {
                    __this.isResetR[path]=true
                    let infoStr=`--------日志文件大于10MB，已清除--------\r\n${info}`
                    fs.writeFile(path, infoStr, function (err) {
                        if (err) {
                            console.log(err);
                        }
                    });
                } else {
                    if(__this.isResetR[path]){
                        __this.isResetR[path]=false
                        _log_Out.log("\r\n"+info)
                    }else{
                        _log_Out.log(info)
                    }
                }
            }
        })
    }
}

let log_out = new GenerateLog()
// 创建log_out
module.exports = {
    log_out
}