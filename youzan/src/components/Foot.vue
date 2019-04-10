<template>
 <div class="bottom-nav">
 <ul> 
      <li v-for='(list,index) in massage' :class='{active:index===curtIndex}' @click='change(list,index)' ><a ><i :class="list.icon"></i><div>{{list.name}}</div></a></li>

    </ul>
</div>

</template>

<script>

let massage=[
  {name:'有赞',icon:'icon-home',href:'./index.html'},
  {name:'分类',icon:'icon-category',href:'./category.html'},
  {name:'购物车',icon:'icon-cart',href:'./cart.html'},
  {name:'我',icon:'icon-user',href:'./member.html'}
]

if(location.href.split('=')[1]){
  var now=location.href.split('=')[1].replace(/[^0-9]/g,"");  
}


export default{
data(){
  return{
      massage,
      curtIndex:now|0
  }
},
create(){
  this.change()
},

methods:{
  change(list,index){
    location.href=`${list.href}?index=${index}`
  }


}

}


</script>
