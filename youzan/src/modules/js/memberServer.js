import fetch from 'js/fetch.js'
import url from 'js/api.js'
import Axios from 'axios';

class Member{
    static init(){
        return Axios.get(url.addressList)};
   static add(data){
        return fetch(url. addressAdd,{
            data
        })
    };
    static remove(id){
        return fetch(url.addressDelate,{
            id,
            number:1
        })
    };
    static updata(data){
        return fetch(url.addressUpdate,{data})
    };
    static setDefault(id){
        return fetch(url.addressDefault,{id})
    }

}

export default Member