import 'css/common.css'
import './cart.css'
import './cart_base.css'
import './cart_trade.css'

import Vue from 'vue'
import url from 'js/api.js'
import axios from 'axios'
import Cart from 'js/cartServer.js'
import Foot from 'components/Foot.vue'





let app= new Vue({
    el:'.app',
    data:{
        cartlist:'',
        checked:'',
        all:false,
        total:0,
        rmall:false
       
    },
    created(){
        this.getcartList()
    },
    methods:{
        getcartList(){
            axios.get(url.cartList).then((res)=>{
                 let cartlist=res.data.cartList
                cartlist.forEach(ress => {
                    ress.checked=true
                    ress.rmchecked=false
                    ress.edit=false
                    ress.goodsList.map(function(e){
                        e.checked=true
                        e.rmchecked=false
                    })
                })
                this.cartlist=cartlist
            })
        },
        checkbot(buystatue,goods,shop){
            let attr=buystatue?'checked':'rmchecked'
            goods[attr]=!goods[attr]
            if(shop){
                shop[attr]= shop.goodsList.every((e)=>{
                    return e[attr]==true
                })  
                return shop
            }
            else{
                if(goods[attr]){
                    goods.goodsList.map((e)=>{
                     e[attr]=true
                 })
                }
                else{
                    goods.goodsList.map((e)=>{    
                     e[attr]=false
                 })
                }         
            }
      
        },
        selectall(buystatue,all){
            let attr=buystatue?'checked':'rmchecked'
            all= (attr=='rmchecked')?this.rmall:this.all
            if(all){
                this.cartlist.forEach(e=>{
                    e[attr]=false
                    e.goodsList.map(e=>{
                        e[attr]=false
                    })
                })
                this.all=false
            }
            else(
                this.cartlist.forEach(e=>{
                    e[attr]=true
                    e.goodsList.map(e=>{
                        e[attr]=true
                    })
                })
            )
        },
        edit(list){
            list.edit=!list.edit
        },
        addgoods(goods){
            Cart.add(goods.id).then( goods.number+=1)
        },
        reducegoods(goods){
            Cart.reduce(goods.id).then(res=>{
                if (goods.number==1){
                    return
                }
                else{
                    goods.number-=1
                }
            })        
        },
        updatagoods(goods){
           Cart.updata(goods.id,goods.number)
        },
       
        removegood(goodsList,goodsindex,shopindex){
            
            axios.post(url.cartrmList,{id:goodsList[goodsindex].id}).then(res=>{
                if(goodsList.length==1){
                
                   this.cartlist.splice(shopindex,1)
                }
                goodsList.splice(goodsindex,1)
            })
    },
    removegoods(){
        let arr=[]
        this.cartlist.forEach((cart,index1)=>{
            cart.goodsList.forEach((e,index)=>{
                if(e.checked==true){
                    arr.push(e.id)
                }
            })
        })
            console.log(arr)
   
        axios.post(url.cartrmList,{id:arr}).then(res=>{
            this.cartlist.forEach((cart,index1)=>{
                cart.goodsList.forEach((e,index)=>{
                    if(this.rmall==true){
                        this.cartlist.splice(0,this.cartlist.length)
                    }
                    else if(this.cartlist[index1].rmchecked==true){
                        this.cartlist.splice(index1,1)
                    }
                    else{
                        for( let i = this.cartlist[index1].goodsList.length - 1; i >= 0; i--){ 
                            if(this.cartlist[index1].goodsList[i].rmchecked==true){    
                                this.cartlist[index1].goodsList.splice(i,1)
                            }
                        }
                    }
                    })     
            })   
        })
    }
    },
    components:{
        Foot
    }
    ,
    computed:{
       allselect:{
           get(){
               if(this.cartlist&&this.cartlist.every(e=>{return e.checked}))
               {
                   this.all=true
               return false
            }
               else{
                   this.all=false
               }    
           }
       },
       
       rmallselect(){
        if(this.cartlist&&this.cartlist.every((e)=>{return e.rmchecked}))
        {this.rmall=true
        return false}
        else{
            this.rmall=false
        }    
       },
       selectlist:function(){
           if(this.cartlist){
               let num=0
               let total=0
               this.cartlist.forEach(e=>{
                   e.goodsList.forEach(e=>{
                       if(e.checked){
                           total+=e.price*e.number
                           num+=1
                       }
                   })
               })
             this.total=total
             return num
           }
       },
       buystatue(){
           if(this.cartlist){
          return this.cartlist.every((e)=>{
                return e.edit==false
          })
           }
       
       
        }
    }
})
