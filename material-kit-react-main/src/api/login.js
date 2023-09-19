import request from "src/utils/request"
const { BACK_PATH } = require("src/utils/Constants")

const doLogin = (data) => {
    return request({
        url: BACK_PATH.DOLOGIN,
        method: 'post',
        data: data,
    })
}


const getAuth = () => {
    return request({
        url: BACK_PATH.GETAUTH,
        method: 'get',
    })
}

const logout = () => {
    return request({
        url: BACK_PATH.LOGOUT,
        method: 'get',
    })
}

const getEnv = () => {
    return request({
        url: BACK_PATH.GETENV,
        method: 'get',
    })
}
export {
    doLogin, getAuth, logout, getEnv,
}