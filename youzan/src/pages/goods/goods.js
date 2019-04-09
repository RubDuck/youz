import './goods.css'
import './goods_base.css'
import './goods_common.css'
import './goods_custom.css'
import './goods_mars.css'
import './goods_sku.css'
import './goods_theme.css'
import Vue from 'vue'
import axios from 'axios'
import mixin from 'js/mixin.js'
import url from 'js/api.js'
import Swiper from 'components/Swiper.vue'


let description=[{goods:'商品详情'},{sales:'本店成交'}]

let app=new Vue({
    el:'.goods',
    data:{
        details:null,
        banner:'',
        description,
        currentindex:0,
        dealist:'',
        id:'',
        choosetatus:'',
        goodshow:false,
        minnum:true,
        num:1,
        add:false,
        
        success:'none'
    },
    created(){
        this.getdetails()
        this.getdeal()
        
    },
 
    methods:{
        getdetails(){
            axios.get(url.detailsList).then((res)=>{
                this.details=res.data.data
             
                this.banner=[]
                this.details.imgs.forEach(function(e) {
                   let newlist={
                        'clickUrl':'',
                        'img':e
                    }
                    this.push(newlist)
                },this.banner);
            
            })
        },
        changestatus(va){
            this.currentindex=va
        },
        getdeal(){
            axios.get(url.dealList).then((res)=>{

                this.dealist=res.data.data.lists
            

            })
        },
        chooseku(type){
            this.choosetatus=type
     
            this.goodshow=true

        },
        cancel(){
            this.goodshow=false
        },
        goodsnum(a){
            console.log(1)
            if(a>0){
                this.num+=1
            }
            else{
                if(this.num<2){
                    return
                }
                else{
                    this.minnum=false
                    this.num-=1
                }
            }
            if(this.num<2){
                this.minnum=true
            }else{
                this.minnum=false
            }
            
        },
        addgoods(){
            this.add=true
            this.goodshow=false
            this.success='block'
            setTimeout(() => {
                this.success='none'
            }, 1000);
        }
    },

    components:{
        Swiper
    },
    watch:{
       goodshow(val,oldVal){
        document.body.style.overflow=val?'hidden':'auto'
        document.querySelector('html').style.overflow=val?'hidden':'auto'
        document.querySelector('html').style.height=val?'100%':'auto'
        document.body.style.height=val ? '100%':'auto'
        }  
    }
})