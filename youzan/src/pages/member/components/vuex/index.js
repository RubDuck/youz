import Vue from 'vue'
import  Vuex from 'vuex'
import Member from 'js/memberServer.js'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        lists:[],
    },
    mutations: {
        init(state,payload){
           
            state.lists=payload
            
           
        },
        add(state,data){
            state.lists.push(data)
            
        },
        modify(state,data){
            let lists=state.lists
            console.log(lists)
            let index=lists.findIndex(item=>{
                return item.id ==data.id
            })
            lists[index]=data

        },
        remove(state,id){
            let lists=state.lists
            let index=lists.findIndex(item=>{
                return item.id ==id
            })
         lists.splice(index,1)
            
        },
        setDefault(state,id){
            let lists=state.lists
            lists.forEach(item=>{
                item.isDefault=item.id==id?true:false
            })
        }
    },
    actions:{
        initAction({commit}){
         Member.init().then(res=>{
            commit('init',res.data.lists)
         })

        },

        addAction({commit},data){
            Member.add(data).then(res=>{
                commit('add',data)
            })

        },
        modifyAction({commit},data){
            Member.updata(data).then(res=>{
             commit('modify',data)
              })
            
        },
        removeAction({commit},id){
            Member.remove(id).then(res=>{
                 commit('remove',id)
                }
              )
        },
        setDefaultAction({commit},id){
            Member.setDefault(id).then(res=>{commit('setDefault',id)}
              )
        }

    }
  })

export default store