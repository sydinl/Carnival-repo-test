import { noAuthrized } from "./CommonUtil";

const { default: axios } = require("axios");
const request = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API,
    timeout: 60000 // request timeout 
})

let cancel
request.interceptors.request.use(
    config => {
        config.cancelToken = new axios.CancelToken(c => cancel = c)
        if (noAuthrized(config.url)) {
            cancel("no authorized to access")
        }
        config.url = config.url.replace("//", "/")
        console.log("start request")
        startProgress()
        return config
    },
    error => {
        // Do something with request error
        // console.log(error) // for debug
        console.log("request err")
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    response => {
        console.log("reponse success")
        stopProgress()
        if (response.status === 200) {
            if (response.data.code || (response.headers['content-type'] && response.headers['content-type'].indexOf("APPLICATION/OCTET-STREAM") != -1)) {
                return Promise.resolve(response)
            }
        } else {
            return Promise.reject(response)
        }
    },
    error => {
        console.log(error)
        stopProgress()
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    console.log(error)
                    if (error.response.data.msg) {
                        alert(error.response.data.msg)
                    }
                    break;
                case 403:
                    console.log(error)
                    //expired
                    break;
                case 404:
                    window.location.href = "/404"
                    break;
                default:
                    console.log(error.response)
                    if (error.response.data.msg) {
                        alert(error.response.data.msg)
                    }
            }
        } else {
            //only alert is closed can call reject
            if (error.message && error.message.indexOf('timeout') != -1) {
                return new Promise((resolve, reject) => alert("Request timeout", () => reject(error)))
            } else if (error.message == 'no authorized to access') {
                alert("UNAUTHORIZED")
            } else {
                alert("System Error")

            }
        }
        return Promise.reject(error);
    }
);
export default request