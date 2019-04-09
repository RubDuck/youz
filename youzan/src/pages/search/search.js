import Vue from 'vue'
import Foot from 'components/Foot.vue'
import 'css/common.css'
import './search.css'
import axios from 'axios'
import url from  'js/api.js'
import qs from 'qs'
import mixin from 'js/mixin.js'



let {keyword,id}=qs.parse(location.search.substr(1))

let search=new Vue({
    el:'#searchlist',
    data:{
        searchlist:'',
        keyword:keyword,
        touch:false
       
    },
    created(){
        this.search()

    },
    methods:{
        search(){
            axios.get(url.searchList,{keyword,id}).then((res)=>{
                this.searchlist=res.data.lists

            })
            
        },
        move(){
            if(document.documentElement.scrollTop>100){
              
                this.touch=true
               
            }
            else{
                this.touch=false
         
            }
        }
    },
    mixins: [mixin]



})

