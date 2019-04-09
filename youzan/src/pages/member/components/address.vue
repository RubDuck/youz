<template>
<div class="container " style="min-height: 597px;">
    <div class="block-list address-list   section section-first js-no-webview-block">
      <a class="block-item js-address-item address-item"   @click='editor(list)' v-for=' list in lists' :class="{active:list.isDefault}" >
        <div class="address-title">{{list.name}} {{list.tel}}</div>
        <p>{{list.provinceName}}{{list.cityName}}{{list.districtName}}{{list.address}}</p>
        <a class='address_edit' >修改</a>
      </a>
    </div>
    <div class="block stick-bottom-row center">
      <router-link class="btn btn-blue js-no-webview-block js-add-address-btn" :to="{name:'edit', query: { status: 'add' }}">
            新增地址
        </router-link>
    </div>
  </div>
</template>



<script>

export default{
 computed:{
   lists:function(){
  
     return this.$store.state.lists
   }
 },
  created(){
    this.$store.dispatch('initAction')
  },
  methods:{
    editor(message){
        this.$router.push({name:'edit', query: { status: 'modify',instance:message}})
    },
 
  }
}

</script>