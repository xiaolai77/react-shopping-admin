import request from './request'
const apiStr='https://laihw.top/apiStr';

export function categoryApi(){//分类
    return request({
        url: apiStr+'/api/act/house/valuation/list.htm', 
        method: 'post'
    })
}