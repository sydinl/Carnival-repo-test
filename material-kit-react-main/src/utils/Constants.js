const ROOT = "/iflow"
const PAGE = "page"

const LOGIN = "/login"

const DOLOGIN = "/doLogin"
const GETAUTH = "/getAuthentication"
const LOGOUT = "/logoff.jsp"
const GETENV = "/getEnv"
const GETTBLIST = "/getTableList"
const GETCOLUMNLIST="/getColumnList"
const COMMON_ACCESS = []
const ROLES_ACCESS = {
    READONLY: [...COMMON_ACCESS],
    ADMIN: [...COMMON_ACCESS],
}
const All_ACCESS = [DOLOGIN, GETAUTH, LOGOUT, GETENV]

const PAGE_PATH = {
    LOGIN: PAGE + LOGIN,
    ROOT: ROOT,
    LOGOUT: LOGOUT,
}

const BACK_PATH={
    DOLOGIN: DOLOGIN,
    GETAUTH: GETAUTH,
    LOGOUT: LOGOUT,
    GETENV: GETENV,
    GETTBLIST: GETTBLIST,
    GETCOLUMNLIST: GETCOLUMNLIST,
}
export {
    PAGE_PATH, All_ACCESS, ROLES_ACCESS, BACK_PATH
}