import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import goods from './components/goods/goods.vue';

Vue.use(VueRouter);

/*eslint-disabled no-new*/
let app=Vue.extend(App);
let router=new VueRouter();

router.map({
	'/goods':{
		component:goods
	}
});

router.start(app,'#app');
