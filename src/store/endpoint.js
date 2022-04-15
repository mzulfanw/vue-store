import axios from "axios";

//* Base URL End Point
let BASE_URL_END_POINT = import.meta.env.VITE_APP_END_POINT

//* Current Version
let CURRET_VERSION = import.meta.env.VITE_APP_VERSION

//* Default Header Custom
axios.defaults.headers.common['version'] = CURRET_VERSION

/**
 * Create Services Axios Default
 */
// const $server = axios.create({
//     baseURL: BASE_URL_END_POINT,
//     headers: {
//         Authorization: {
//             toString () {
//                 return `Bearer ${localStorage.getItem('token')}`
//             }
//         }
//     }
// })


/**
 * Interceptors Request Header
 */
// $server.interceptors.request.use(function (config) {
//     config.when = window.performance.now()
//     return config
// }, function (error) {
//     return Promise.reject(error)
// })

/**
 * Interceptors Response Header
 */
// $server.interceptors.response.use(function (response) {
//     //* Turn on in Development
//     console.log(`${response.config.url} - ${window.performance.now() - response.config.when}ms`)
//     return response
// }, function (error) {
//     return Promise.reject(error)
// })

/**
 *
 * Function Get Axios
 *
 * @param {String} url
 * @param {*} params
 */
export const get = (url, params) => {
    return axios.get(`${BASE_URL_END_POINT}${url}`, {
        params
    })
}

/**
 *
 * Function Post Axios
 *
 * @param {String} url
 * @param {*} body
 */
// export const post = (url, body) => {
//     return $server.post(`${url}`, body)
// }

/**
 *
 * Function Put Axios
 *
 * @param {String} url
 * @param {*} body
 */
// export const put = (url, body) => {
//     return $server.put(`${url}`, body)
// }

/**
 *
 * Function Delete Axios
 *
 * @param {String} url
 * @param {*} params
 */
// export const del = (url, params) => {
//     return $server.delete(`${url}`, {
//         params
//     })
// }

// export default $server