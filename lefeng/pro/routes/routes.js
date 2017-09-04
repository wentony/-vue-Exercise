//1。引入组件，用于路由对应的页面
import Home from "./../com/Home.vue";
import Addres from "./../com/Addres.vue";
import Cart from "./../com/Cart.vue";
import User from "./../com/User.vue";
import Search from "./../com/Search.vue";
import Detail from "./../com/Detail.vue";
import Register from "./../com/Register.vue";
import Login from "./../com/Login.vue";
import Collect from "./../com/Collect.vue";
import Settlement from "./../com/Settlement.vue";
import DetailFooter from "./../com/DetailFooter.vue";
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。

const routes = [
{path:"/",redirect:"/home"},
	{path:"/home",components:{
		default:Home
	}},
	{path:"/login",components:{
		default:Login
	}},
	{path:"/cart",components:{
		default:Cart
	}},
	{path:"/user",components:{
		default:User
	}},
	{path:"/search",components:{
		default:Search
	}},
	{path:"/search/:classID",name:"search",component:Search},
	{path:"/detail",components:{
		default:Detail,
		footer:DetailFooter
	}},
	{path:"/register",components:{
		default:Register
	}},
	{path:"/addres",components:{
		default:Addres
	}},
	{path:"/settlement",components:{
		default:Settlement
	}},
	{path:"/collect",components:{
		default:Collect
	}}
];


export default routes;