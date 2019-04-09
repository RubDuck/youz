import 'css/common.css'
import  './category.css'


import Vue from 'vue'
import Foot from 'components/Foot.vue'
import axios from 'axios'
import url from 'js/api.js'
import mixin from  'js/mixin.js'



let category=new Vue({
    el:'#app',
    data:{
        lists:'',
        brandList:'',
        categoryList:'',
        rankList:'',
        topip:0,

    },

    created(){

        this.gettoplist()
        this.getsubList(0)
        this.getrankList()
        this.getmassage()

    },
   methods:{
       gettoplist(){
           axios.get(url.topList).then((res)=>{
               this.lists=res.data.lists
               
           })
       },
       getsubList(id){
           axios.get(url.subList).then((res)=>{
               this.brandList=res.data.data.brandList
               this.categoryList=res.data.data.categoryList
               this.topip=id
           })
       },
       getrankList(){
           axios.get(url.rankList).then((res)=>{
               this.rankList=res.data.data
        
           })


       },
       getmassage(){
      
       },
       search(lists,index){
           location.href='./search.html'+`?keyword=${lists.name}`+`&id=${index+1}`
       }



   },
    
    components:{
        Foot
    },
    mixins: [mixin],

})