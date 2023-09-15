import { getAuth } from "src/api/login";
import { All_ACCESS, BACK_PATH, PAGE_PATH, ROLES_ACCESS } from "./Constants";

function isEmpty(val) {
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}

function setUserInfoBySessionStorage(data) {
    sessionStorage.setItem('currentUser', JSON.stringify(data));
}

function clearUserInfoInSessionStorage() {
    sessionStorage.removeItem('currentUser')
}

function getUserInfoBySessionStorage(setUser) {
    let currentUser = sessionStorage.getItem("currentUser")
    if (!currentUser) {
        console.log("userInfo is null,fetch userInfo into sessionStorage")
        console.log(currentUser)
        if (location.pathname !== (PAGE_PATH.ROOT + PAGE_PATH.LOGIN)) {
            getAuth().then((res) => {
                setUserInfoBySessionStorage(res.data.data)
                if (setUser) {
                    setUser(res.data.data)
                }
            })
        }
        return null
    }
    return JSON.parse(currentUser)

}

let isObjectValueEqual = (a, b) => {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    if (aProps.length != bProps.length) {
        return false;
    }
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i]

        var propA = a[propName]
        var propB = b[propName]
        if (!b.hasOwnProperty(propName)) return false
        if ((propA instanceof Object)) {
            if (this.isObjectValueEqual(propA, propB)) {
                // return true     can not return true cause have not compared finished
            } else {
                return false
            }
        } else if (propA !== propB) {
            return false
        } else { }
    }
    return true
}

const noAuthrized = (url) => {
    if (All_ACCESS.includes(url)) {
        return false
    }
    if (url.indexOf(BACK_PATH.DELETEMTENTRY) != -1) {
        url = BACK_PATH.DELETEMTENTRY
    }
    let user = getUserInfoBySessionStorage()
    let currentRoles = user ? user.groups : null
    if (currentRoles && currentRoles.length != 0) {
        return !currentRoles.some(role => (ROLES_ACCESS[role] && ROLES_ACCESS[role].includes(url)))
    }
    return true
}

const rmProperty = (obj, k) => {
    Reflect.deleteProperty(obj, k)
}
export {
    isEmpty, getUserInfoBySessionStorage as getUserInfo,
    setUserInfoBySessionStorage, isObjectValueEqual, noAuthrized,
    clearUserInfoInSessionStorage as clearUserInfo, rmProperty
}