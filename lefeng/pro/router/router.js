import VueRouter from "vue-router";
//定义的路由规则
import routes from "./../routes/routes.js";

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。

var router = new VueRouter({
//	routes:routes
	routes
})

export default router;