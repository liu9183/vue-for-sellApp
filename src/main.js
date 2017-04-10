import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.use(VueRouter);

/*eslint-disabled no-new*/
let app=Vue.extend(App);
let router=new VueRouter();

router.map({
	'/goods'
})
