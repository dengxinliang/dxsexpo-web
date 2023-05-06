import $http from '../http'
const { get } = $http 

/**
 * 
 * 获取企业信息
 * @param {*} data
 * @returns 
 */
export function company(data) {
    return get('/stage-api/company', data)
}

/**
 * 
 * 获取企业文化信息
 * @param {*} data
 * @returns 
 */
export function companyInfo(data) {
    return get('/stage-api/company-info', data)
}

/**
 * 
 * 获取企业组织架构
 * @param {*} data
 * @returns 
 */
export function depart(data) {
    return get('/stage-api/depart', data)
}

/**
 * 
 * 获取banner
 * @param {*} data
 * @returns 
 */
export function banner(data) {
    return get('/stage-api/banner', data)
}

/**
 * 
 * 获取招聘信息
 * @param {*} data
 * @returns 
 */
export function recruit(data) {
    return get('/stage-api/recruit', data)
}