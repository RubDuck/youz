
import axios from 'axios'
function fetch(url,data){
    return new Promise((resolve,reject)=>{

        axios.post(url,data).then(res=>{
            let status=res.data.status
            if (status==200){
                resolve(res)
            }
        }).catch(err=>{
            reject(res)
        })
    })
}

export default fetch