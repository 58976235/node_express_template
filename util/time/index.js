/*
 * @Author: your name
 * @Date: 2021-09-01 13:43:15
 * @LastEditTime: 2021-09-01 14:01:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node_express_template/public/javascripts/time.js
 */
function fillZero(num){
    let str=num.toString()
    if(str.length>1){
        return str
    }else{
        return '0'+str
    }
}
const getNowTime = ()=>{
    let date = new Date()
    let year=date.getFullYear()
    let month=fillZero(Number(date.getMonth())+1)
    let day=fillZero(date.getDay())
    let hours=fillZero(date.getHours())
    let minutes=fillZero(date.getMinutes())
    let seconds=fillZero(date.getSeconds())
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

module.exports={
    getNowTime
}