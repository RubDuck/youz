let url={
    hotLists:'search/list',
    banner:'index/banner',
    topList:'category/topList',
    subList:'category/subList',
    rankList:'category/rank',
    searchList:'search/list',
    detailsList:'goods/details',
    dealList:'goods/deal',
    cartList:'cart/list',
    cartrmList:'cart/remove',
    addgoods:'cart/add',
    reducegoods:'cart/reduce',
    updatagoods:'cart/update',
    addressList:'address/list',
    addressDefault:'address/setDefault',
    addressAdd:'address/add',
    addressDelate:'address/remove',
    addressUpdate:'address/update'
}

let host = 'http://rap2api.taobao.org/app/mock/7058/'

for(let key in url){
    if(url.hasOwnProperty(key)){
        url[key]=host+url[key]
    }
}

export default url