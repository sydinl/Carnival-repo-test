import request from "src/utils/request"

// const { default: request } = require("src/utils/request")
const { BACK_PATH } = require("src/utils/Constants")

// const doLogin = (data) => {
//     return request({
//         url: BACK_PATH.DOLOGIN,
//         method: 'post',
//         data: data,
//     })
// }


// const getAuth = () => {
//     return request({
//         url: BACK_PATH.GETAUTH,
//         method: 'get',
//     })
// }

// const logout = () => {
//     return request({
//         url: BACK_PATH.LOGOUT,
//         method: 'get',
//     })
// }
const getTableList = (dbName) => {
    return request({
        url: BACK_PATH.GETTBLIST + "/" + dbName,
        method: 'get',
    })
}
const getColumnList = (tableName) => {
    return request({
        urll: BACK_PATH.GETCOLUMNLIST + "/" + tableName,
        method: 'get',
    })
}
export {
    getTableList, getColumnList
}