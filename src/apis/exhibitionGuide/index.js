import $http from '../http'
const { get } = $http 

/**
 * 
 * 获取参展流程信息
 * @param {*} data
 * @returns 
 */
export function exhibitionProcess(data) {
    return get('/stage-api/exhibition-process', data)
}