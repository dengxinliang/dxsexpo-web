import $http from '../http'
const { get } = $http 

/**
 * 
 * 获取行业信息
 * @param {*} data
 * @returns 
 */
export function information(data) {
    return get('/stage-api/information', data)
}