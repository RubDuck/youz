<template>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swp-page swiper-slide" v-for='list in bannerlists'>
              <a class="js-no-follow"  v-bind:href="list.clickUrl">
                <img class="goods-main-photo fadeIn" :src="list.img">
              </a>
            </div>
            
          </div>
       <div class="swiper-pagination"></div>
        </div>
         
</template>



<style>
.swiper-wrapper .swiper-slide a {
     display:inline
  }
  .swiper-wrapper .swiper-slide a img{
     width:100%;
     height:100%;
  }
</style>


<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min.js'
export default{
props:{
  bannerlists:{
    type:Array,
    required: true

  }
},
mounted(){
  new Swiper ('.swiper-container', {
        loop:true,
        pagination: {
    el: '.swiper-pagination',
  },
    
  })
}
}
</script>

