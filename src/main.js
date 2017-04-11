import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';


Vue.use(VueRouter);
Vue.use(VueResource);
/*eslint-disabled no-new*/

const router = new VueRouter({
	routes:[
	  {
	  	path:'/goods',
	    component:goods
	  },
	  {
	  	path:'/ratings',
	    component:ratings
	  },
	  {
	  	path:'/seller',
	    component:seller
	  }
	]
});

new Vue({
	el:'#app',
	template: '<App/>',
	components:{ App },
	router

})
router.push("/goods")