import $http from '../http'
const { get } = $http 

/**
 * 
 * 获取行业类型
 * @param {*} data
 * @returns 
 */
export function industryCategory(data) {
    return get('/stage-api/industry-category', data)
}

/**
 * 
 * 获取展会列表
 * @param {*} data
 * @returns 
 */
export function exhibitionPlan(data) {
    return get('/stage-api/exhibition-plan', data)
}