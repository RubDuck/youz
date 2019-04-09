import './index.css'
import 'css/common.css'
import Vue from 'vue'
import url from  'js/api.js'
import axios from 'axios'
import { InfiniteScroll } from 'mint-ui'

import Foot from 'components/Foot.vue'
import Swiper from 'components/Swiper.vue'

Vue.use(InfiniteScroll);


let app =new Vue({
    el :'#app',
    data:{
        lists:null,
        pageNum:0,
        pageSize:6,
        loading:false,
        allloaded:false,
        banner:null
    },
    created(){
        this.getlist()  
        this.getbanner()
    },
    methods:{
        getlist(){
            if(this.allloaded){
                return
            }
            this.loading=true
            axios.get(url.hotLists,{
                pageNum:this.pageNum,
                pageSize:this.pageSize
            }).then(res=>{
               let  currentlist=res.data.lists
                if(currentlist.length<this.pageSize){
                    this.allloaded=true
                }
                if(this.lists){
                    this.lists=this.lists.concat(currentlist)
                }else
                {
                    this.lists=currentlist
                }
                this.loading=false
                this.pageNum+=1  
            })
        },
        getbanner(){
            axios.get(url.banner).then((res)=>{
                this.banner=res.data.lists
            })
        }

    },
    components:{
        Foot,
        Swiper
    }

})