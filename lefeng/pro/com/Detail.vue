<template>
	<div >
		<header class="header  comheader">
		   <div   class="detailHeaderImg">
				<div  class="iconfont  comicon"  @click="back()">&#xe664;</div>
		   </div>
		   <div  class="homeHeaderIpt">
				<div   class="detailTitle">{{title}}</div>
		   </div>
		   <div   class="homeHeaderIcon">
				<div class="iconfont"   @click="hom()">&#xe608;</div>
		   </div>
	    </header>
		<div  class="detailcotent">
           <div  class="detailcotentTitle">
			   <div  class="detailcotentTitlea">
			      <img  v-bind:src="srcdetail"/>
			   </div>	 
		   </div>
           <div  class="wrap">
               <p><span>{{title}}</span><span  class="iconfont"   id="iconf"  @click="iconf()">&#xe6fb;</span></p>
			   <p><span>￥</span><span>{{vipshopPrice}}</span><span>￥{{marketPrice}}</span></p>
		   </div>
		   <div  id="toast"></div>
           <div   class="area">
                <p   v-for="item  in  pmsList"><span>{{item.type}}</span><span>{{item.msg}}</span></p>
		   </div>
           <div  class="bak"></div>
           <div  class="flower">
               <p><span>花粉</span><span>{{flower}}</span></p>
		   </div>
		   <div  class="bak"></div>
           <div  class="detail-msg">
               <table>
                  <tr   v-for="p  in  tal"><th>{{p.name}}</th><td>{{p.value}}</td></tr>
			   </table>
		   </div>
		   <div  class="listTitle">浏览本商品的还买了</div>
		   <div  class="detail-list">
                <ul>
                   <li  v-for="op  in  detaillist"   @click="deatillist(op.goods.gid)">
					   <img   v-bind:src="op.goods.image"/>
					   <p><span>{{op.goods.brandStoreName}}</span><span>{{op.goods.name}}</span></p>
				   </li>
				</ul>
		   </div>
		   <div   class="detail-cart">
                <span   class="iconfont"   @click="cart1()">&#xe634;</span>
				<span  @click="cart()">加入购物车</span>
				<span  id="addnum">{{num}}</span>
				<span   id="timer"   class="iconfont">&#xe68c;{{timers}}</span>
		   </div>
		   <div  class="detailscroll"   @click = "scroll()">
				<img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGN0ZBNTQyNjg4MTVFNTExQjVEMkQ5RjJGMThENDdENCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MjAzNTg4RTE5NTQxMUU1OUJGMEIwNDIxNEFFNkI0QiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MjAzNTg4RDE5NTQxMUU1OUJGMEIwNDIxNEFFNkI0QiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFEQjRCMzUwNTIxOUU1MTE4QTE4RjEwNzRBQTJGNDlGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY3RkE1NDI2ODgxNUU1MTFCNUQyRDlGMkYxOEQ0N0Q0Ii8+IDwvcmRmOkRlc2NyaXB0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"/>
		  </div>
		  <div  id="anima"></div>
		</div>
	</div>
</template>
<script>
    import router from "./../router/router.js";
	import  ajax  from  './../md/MyAjax.js';
	import  toast  from  './../md/toast.js';
	export default {
		data(){
			return {
				title:"",
				srcdetail:"",
				vipshopPrice:"",
				marketPrice:"",
				pmsList:[],
				flower:"",
				tal:[],
				detaillist:[],
				off:true,
				first:true,
				name:"",
				verticalImage:"",
				 num:0,
				 timers:""
			}
		},
		methods:{
			 scroll(){
                $("#container").scrollTop(0) 
			 },
			 hom(){
               router.push({
					  path:"/user",
				      })
			 },
			cart1(){
				if(localStorage.getItem("login") != "1"){
                     router.push({
					  path:"/login",
				      })

				}else{
                    router.push({
					  path:"/cart",
				   })
				}
			},
			back(){
				window.history.go(-1);
			},
			deatillist(a){
               console.log(a)
			   router.push({
					  path:"detail",
					  query:{
                         id:a
					  }
				  })
			  location.reload()   	  
			},
            cart(){
			 $("#addnum").css("display","block")
              var that = this
              var goodsID = window.location.hash.split("=")[1];
			  var title = that.title;
			  var price = that.vipshopPrice;
			  var id = goodsID
			  var img = that.verticalImage
			  var name = that.name
			  
              if(localStorage.getItem("login") != "1"){
					toast.makeText("请先登录",2000)
							router.push({
								path:"/login",
							})
						return;
					}else{
                     $("#anima").css("display","block")
						setTimeout(function(){
						$("#anima").animate({"left":"20px","bottom":"20px","height":"0","width":"0"},1000)
						},20)	
						setTimeout(function(){
							$("#anima").css({
									"display":"none"
							}).animate({"left":"50%","bottom":"50%","height":"20px","width":"20px"})
							that.num = Number(that.num)+1
						},1000)	
						//  console.log(localStorage.getItem('goods'))
					var first = localStorage.getItem('goods')==null?true:false;
					var same = false;
					if(first){
						localStorage.setItem('goods','[{"id":"'+id+'","title":"'+title+'","price":"'+price+'","img":"'+img+'","num":"1","name":"'+name+'"}]');
						localStorage.setItem('first','false');
						
					}else{
						var id = goodsID
						// console.log(id)
						var str = localStorage.getItem('goods');
					//    console.log(str)
						var arr = eval(str);
						for(var attr in arr){
							if(arr[attr].id == id){		
								arr[attr].num = arr[attr].num + 1;  
								var cookieStr = JSON.stringify(arr);
								localStorage.setItem('goods',cookieStr);
								same = true;
							}
						}
						if(!same){
							var obj  = {id:id,num:1,title:title,price:price,img:img,name:name};
							arr.push(obj);
							var cookieStr = JSON.stringify(arr);
							localStorage.setItem('goods',cookieStr);
						}                
					}
				} 
				console.log(that.timers)
				that.timers="";
				$("#timer").css("display","block") 
			    var clock=new clock();  
				var timer;  
				clearInterval(timer);
				timer=setInterval(function(){
					clock.move()
					console.log(that.timers)
				},1000);  
				function clock(){  
					this.s=1200;  
					this.move=function(){
						var cookieStr = JSON.stringify(exchange(this.s));
						localStorage.setItem('timec',cookieStr);
						that.timers=exchange(this.s);  
						this.s=this.s-1;  
						if(this.s<0){  
							$("#timer").css("display","none") 
							  clearInterval(timer);  
							}  
							console.log(that.timers)
						}  
					}  
					function exchange(time){  
						that.m=Math.floor(time/60);  
						that.s=(time%60);  
						that.text=that.m+":"+that.s;  
						return that.text;  
					}   	
			 },
			 iconf(){
				var that = this
				var goodsID = window.location.hash.split("=")[1];
				var title = that.title;
				var price = that.vipshopPrice;
				var id = goodsID
				var img = that.verticalImage
				var name = that.name
                  if(localStorage.getItem("login") == "1"){
					  console.log(localStorage.getItem('collect1'))
					if(that.off){
						$("#iconf").css({
							color:"#FF0056"
						})
						that.off = false;
                        var collect = localStorage.getItem('collect1')==null?true:false;//判断是否有cookie进行添加
						var collects = false;
                        if(collect){
                               localStorage.setItem('collect1','[{"id":"'+id+'","title":"'+title+'","price":"'+price+'","img":"'+img+'","name":"'+name+'"}]');
						       localStorage.setItem('collect','false');
						}else{
                                var id = goodsID
								// console.log(id)
								var str = localStorage.getItem('collect1');
							    // console.log(str)
								var arr = eval(str);
								//遍历所有对象。
								for(var attr in arr){
									if(arr[attr].id == id){		
										collects = true;
									}
								}
								//如果id不同，重新建立商品对象;
								if(!collects){
									var obj  = {id:id,title:title,price:price,img:img,name:name};
									arr.push(obj);
									var cookieStr = JSON.stringify(arr);
									localStorage.setItem('collect1',cookieStr);
									// console.log(arr)
								}  
								toast.makeText("收藏成功",2000)
						 }
					}else{
						$("#iconf").css({
							color:"#FFB1CB"
						})
						toast.makeText("取消收藏",2000)
						that.off = true;
                        var str = localStorage.getItem('collect1');
							    // console.log(str)
					    var arr = eval(str);
								//遍历所有对象。如果id相同，让该商品数量递增 ;
						for(var attr in arr){
							if(arr[attr].id == id){		
								arr.splice(attr,1)
							   var cookieStr = JSON.stringify(arr);
							   localStorage.setItem('collect1',cookieStr);
							}
						}
					}
				}else{
					router.push({
                         path:"/login"
                     })
				 }
			 }
		},
		mounted(){
			
			localStorage.setItem('off1','true');
			var that = this;
			var str = localStorage.getItem('goods');
			var arr = eval(str);
            console.log(arr)
			var str1 = localStorage.getItem('timec');
			that.timers =eval(str1)
			console.log(str1)
			if( arr  == null   ||  arr.length ==  "0"){
                 $("#timer").css("display","none")
                 $("#addnum").css("display","none")
			}else{
				$("#timer").css("display","block")
				$("#addnum").css("display","block")
               for(var attr in arr){
					that.num = Number(that.num)+Number(arr[attr].num)			
				}
			}
			var goodsID = window.location.hash.split("=")[1];
            var url = "http://w.lefeng.com/api/neptune/goods/detail_with_stock/v1?needBrandInfo=true&gid="+goodsID
            ajax.vueJson(url,function (data) {
                   console.log(data.data)
                   that.title = data.data.goods.name
				   that.srcdetail = data.data.goods.smallImage[0]
				   that.vipshopPrice = data.data.goods.vipshopPrice
				   that.marketPrice = data.data.goods.marketPrice
				   that.pmsList = data.data.goods.pmsList
				    that.name =data.data.goods.brandStoreName
				   that.flower = data.data.goods.pollenTips
				   that.tal = data.data.goods.descriptions
				   that.verticalImage = data.data.goods.verticalImage
			},function (err) {
                   console.log(err)
			})
            var url1 = "http://w.lefeng.com/api/neptune/handpick_list/v1?stochastic=1&start=1"
            ajax.vueJson(url1,function (data) {
                //    console.log(data.data)
                   that.detaillist = data.data
			},function (err) {
                   console.log(err)
			});
            $("#container").bind("scroll",function(e){
                 if($(this).scrollTop() > 300){
                    $(".detailscroll").css("display","block")
				  }else{
                    $(".detailscroll").css("display","none")
				  }
			})
             if(localStorage.getItem("login") != "1"){
                       $("#timer").css("display","none")
                      $("#addnum").css("display","none")

				}





		}
	}
</script>

<style >
	#anima{
		width:20px;
		height:20px;
		background:red;
		position:absolute;
		left:50%;
		bottom:50%;
		display:none;
	}
</style>