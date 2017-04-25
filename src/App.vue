<template>
  <div>
      <v-header v-bind:seller="seller"></v-header>
    	<div class="tab">
    		   <div class="tab-item">
    		   	<router-link to="/goods">商品</router-link>
    		   </div>
    		   <div class="tab-item">
    		    <router-link to="/ratings">评论</router-link>
    		   </div>
    		   <div class="tab-item">
    		   	<router-link to="/seller">商家</router-link>
    		   </div>
    	</div>
    	<keep-alive>
    		<router-view :seller="seller"></router-view> <!--…………keep-alive……………… -->
    	</keep-alive>
    	
  </div>
</template>

<script>
	   import {urlParse} from './common/js/util.js';
     import header from './components/header/header.vue';
     const ERR_OK=0;
     export default{
     	 data(){
     	 	return{
     	 		seller:{
     	 			id:(() => {
     	 				let queryParam=urlParse();
     	 				return queryParam.id;
     	 			})()
     	 		}
     	 	};
     	 },
     	 created(){
     	 	 this.$http.get('/api/seller?id='+this.seller.id).then(function(response){
     	 	 	  response=response.body;
     	 	 	  if(response.errno===ERR_OK){
     	 	 	  //	this.seller=response.data;
     	 	 	  	this.seller=Object.assign({},this.seller,response.data);//………………………………………………扩展seller对象，使其有id属性
     	 	 	  //	console.log(this.seller.id);
     	 	 	  }
     	 	 	 
     	 	 })
     	 },
     	 components:{
     	  	'v-header':header
     	 }
     }
</script>
  
<style>
  .tab{
  	display: flex;
  	width: 100%;
  	height: 40px;
  	line-height: 40px;
  	border-bottom: 1px solid rgba(7,17,27,0.1);
  }
  .tab>.tab-item{
  	flex: 1;
  	text-align: center;
  }
  .tab-item>a{
  	display: block;
  	font-size: 14px;
  	color: rgb(77,85,93);
  }
  a.router-link-active{
  	color: rgb(240,20,20);
  }
</style>
