import fetch from 'js/fetch.js'
import url from 'js/api.js'


class Cart{
   static add(id){
        return fetch(url.addgoods,{
            id,
            number:1
        })
    };
    static reduce(id){
        return fetch(url.reducegoods,{
            id,
            number:1
        })
    };
    static updata(id,number){
        return fetch(url.updatagoods,{id,number:number})
    }

}

export default Cart