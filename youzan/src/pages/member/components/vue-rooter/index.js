import Rooter from 'vue-router'
import Vue from 'vue'

Vue.use(Rooter)


let routes=[
    {path:'/',component:require('../member.vue')},
    {path:'/all',name:'all',component:require('../all.vue'),
    children:[
        {path:'',name:'address',component:require('../address.vue')},
        {path:'address',name:'address',component:require('../address.vue')},
        {path:'edit',name:'edit',component:require('../edit.vue')}
    ]
}
]

let router=new Rooter({
    routes
})

export default router