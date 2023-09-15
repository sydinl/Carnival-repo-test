const ROOT = "/"
const PAGE = "page"

const LOGIN = "/login"

const DOLOGIN = "/doLogin"
const GETAUTH = "/getAuthentication"
const LOGOUT = "/logoff.jsp"
const GETENV = "/getEnv"
const COMMON_ACCESS = []
const ROLES_ACCESS = {
    READONLY: [...COMMON_ACCESS],
    ADMIN: [...COMMON_ACCESS,AAA],
}
const All_ACCESS = [DOLOGIN, GETAUTH, LOGOUT, GETENV]

const PAGE_PATH = {
    LOGIN: PAGE + LOGIN,
    ROOT: ROOT,
    LOGOUT: LOGOUT,
}

export {
    PAGE_PATH, All_ACCESS, ROLES_ACCESS
}