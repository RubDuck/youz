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

let host = 'https://easy-mock.com/mock/5c9b6e2da88cf9475e3996c0/youzan/'

for(let key in url){
    if(url.hasOwnProperty(key)){
        url[key]=host+url[key]
    }
}

export default url