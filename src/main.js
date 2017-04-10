import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import goods from './components/goods/goods.vue';

Vue.use(VueRouter);

/*eslint-disabled no-new*/

const router = new VueRouter({
	routes:[
	  {
	  	path:'/goods',
	    component:goods
	  }
	]
});
new Vue({
	el:'#app',
	template: '<App/>',
	components:{ App },
	router
})
