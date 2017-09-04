import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
Vue.use(VueRouter);
Vue.use(VueResource);

import store from "./store"

import "./scss/main.scss";



import App from "./com/App.vue";

import router from "./router/router.js";

//4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
	el:"#app",
	router:router,
	store:store,
	data:{
		
	},
	methods:{
		
	},
	components:{
		"v-app":App
	},
	computed:{
		
	},
	watch:{
		
	},
	mounted(){
		
	}
})
