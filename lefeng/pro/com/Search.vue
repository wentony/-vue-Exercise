<template>
	<div >
		<header class="header  comheader">
		           <div   class="searchHeader">
						 <input  type="text"   placeholder="搜索商品"  id="changes"/>
					</div>
					<div  class="searchbak">
					        <span    @click="goback()">取消</span>
					</div>
					<div   class="searchIcon">
						   <div class="iconfont">&#xe608;</div>
					</div>
	    </header>
	    <div   class="searchconent">
			<div    class="searchconenta"  id="searchconenta">
				<div   class="searchconenta1">
					<span   class="iconfont">&#xe628;</span> 大家都在搜
				</div>
				<div  class="searchconenta2">
					<span   v-for="item  in  list"  :class="item.ishighlight == 1? 'ishong' : ''">
						<router-link :to="{name:'search',params:{classID:item.word}}">{{item.word}}</router-link>
					</span>
				</div>
				<div   class="searchconenta3">
					<p><span  class="iconfont">&#xe68c;</span><span>历史搜索</span></p>
				</div>
			</div>
            <div  class="searchipt"  id="searchipt">
                 <ul>
                    <li  v-for="n  in  listb"  @click="none(n)">
						  <router-link :to="{name:'search',params:{classID:n}}">{{n}}</router-link>
					</li>
				 </ul>
			</div>
			<div  class="shaixuan">
                  <div   class="shaixuana"   id="shaixuana">
					  <div   class="shaixuanb">
                         <span  @click="disnone()">取消</span><span>筛选</span>
					  </div>
					  <div  class="bak"></div>
					  <div  class="baka">
						  分类
					  </div>
					  <div  class="bakb">
                            <ul  id="seo">
								<li  class="activ">全部</li>
								<li  v-for="s  in  listc" >{{s.thirdCatName}}</li>
							</ul>
					  </div>
					  <div  class="bak"></div>
					  <div   class="btnniu">确认</div>
				  </div>
			</div>
			<div    class="searchconentb"  id="searchconentb">
				  <div  class="searchconentbtitle">
                      <ul>
						  <li   class="lists"><span  class="iconfont">&#xe60e;</span>价格</li>
						  <li   class="lists"><span  class="iconfont">&#xe60e;</span>销量</li>
						  <li   class="lists"><span  class="iconfont" >&#xe609;</span>筛选</li>
					  </ul>
				  </div>
                  <div  class="searchconentblist">
                      <ul>
                        <li  v-for="item  in   lista"   @click="detailS(item.goods.gid)">
						   <div  class="searchlistleft">
                                <img  v-bind:src="item.goods.image"/>
						   </div>
						   <div   class="searchlistright">
							    <p>{{item.goods.brandStoreName}}</p>
								<p>{{item.goods.productName}}</p>
								<p><span  class="iconfont">&#xe633;</span>{{item.goodsStock.saled}}人购买</p>
								<p><span>￥</span><span>{{item.goods.vipshopPrice}}</span><span>￥{{item.goods.marketPrice}}</span><span  class="iconfont">&#xe634;</span></p>
						   </div>
						</li>
					  </ul>
				  </div>
			</div>
		</div>
	</div>
</template>

<script>
    import router from "./../router/router.js";
    import  ajax  from  './../md/MyAjax.js';
	  export default {
		   data(){
              return{
                  list:[],
				  lista:[],
				  listb:[],
				  listc:[]
			  }
		   },
			computed: {
				
			},
			methods: {
				goback(){
					window.history.go(-1);
				},
				none(n){
					// console.log(n)
					var that = this
					 $("#searchipt").css("display","none")
                    var  url="http://w.lefeng.com/api/neptune/search/search_by_keyword/v1?keyword="+n
					ajax.vueJson(url,function (data) {
						$("#searchconentb").css("display","block")
						$("#searchconenta").css("display","none")
							// console.log(data.data)
							that.lista = data.data
						},function (err) {
							console.log(err)
						});
					var url3="http://w.lefeng.com/api/neptune/goods/get_thirdcat_size/v1?keyword="+n
					ajax.vueJson(url3,function (data) {
							 console.log(data.data)
							 that.listc = data.data
						},function (err) {
							 console.log(err)
					});	
				},
				disnone(){
                   $(".shaixuan").css("display","none")

				},
				detailS(a){
				  console.log(a)
				//   window.history.go(-1);
                  router.push({
				  path:"/detail",
					  query:{
                         id:a
					  }
				   })

			   }
			},
			watch:{
              '$route':function(newRoute){
				  var that = this
				  console.log(newRoute.params.classID)
				  var  word = newRoute.params.classID
				  var  url="http://w.lefeng.com/api/neptune/search/search_by_keyword/v1?keyword="+word
				  ajax.vueJson(url,function (data) {
					  $("#searchipt").css("display","none")
					  $("#searchconentb").css("display","block")
					  $("#searchconenta").css("display","none")
						console.log(data.data)
						that.lista = data.data
					},function (err) {
						console.log(err)
					});
			    }
			},
			mounted(){
				    // console.log(this)
					var  that = this
					//  console.log(that.$route.params.classID)
					$("#changes").on("keyup",function(){
						if($("#changes").val().length =="0"){
							$("#searchconenta").css("display","block")
							$("#searchconentb").css("display","none")
						}else{
							$("#searchconenta").css("display","none")
						}
					   var val = $("#changes").val()
                       var url ="http://w.lefeng.com/api/neptune/search/suggestion/v1?keyword="+val+"&count=15"
                       ajax.vueJson(url,function (data) {
						//    console.log(data.data)
						   that.listb = data.data
						   
						},function (err) {
							console.log(err)
						});
					})
					
					var  url="http://w.lefeng.com/api/neptune/search/hot_keywords/v1?count=10&highlight=1"
                    ajax.vueJson(url,function (data) {
						// console.log(data.data)
						that.list =  data.data
					},function (err) {
						console.log(err)
					});
					// console.log($(".lists"))
					$(".lists").on("click",function(){
                         console.log($(this).index())
                         if($(this).index() == "0"){
                                var  url="http://w.lefeng.com/api/neptune/search/search_by_keyword/v1?keyword="+that.$route.params.classID
							     ajax.vueJson(url,function (data) {
										     console.log(data.data)
                                             var arr1 = data.data
											 arr1.sort( function(a,b) {
												 return a.goods.vipshopPrice - b.goods.vipshopPrice;
											 })
												
										that.lista = arr1
									},function (err) {
										console.log(err)
									});

						     }else  if($(this).index() == "1"){
                                 var  url="http://w.lefeng.com/api/neptune/search/search_by_keyword/v1?keyword="+that.$route.params.classID
							     ajax.vueJson(url,function (data) {
										    //  console.log(data.data)
                                             var arr1 = data.data
											 arr1.sort( function(a,b) {
												 return  b.goodsStock.saled - a.goodsStock.saled;
											 })
										that.lista = arr1
									},function (err) {
										console.log(err)
									});
							}else  if($(this).index() == "2"){
                                 $(".shaixuan").css("display","block")
								 $("#shaixuana").animate({"right":"0"},600)
                                 $("#seo").find("li").on("click",function(){
                                       $("#seo").find("li").removeClass("activ").eq($(this).index()).addClass("activ")
                                    //    console.log($(this).context.textContent)
									   var msg = $(this).context.textContent
                                       localStorage.setItem("msg",msg)

								 })
								 $(".btnniu").on("click",function(){
                                    // console.log(localStorage.getItem("msg"))
									 $(".shaixuan").css("display","none")
									var  msg = localStorage.getItem("msg")
									  var url="http://w.lefeng.com/api/neptune/search/search_by_keyword/v1?keyword="+msg
										ajax.vueJson(url,function (data) {
											localStorage.setItem("msg","")
											    // console.log(that.lista)
												// console.log(data.data)
												that.lista= data.data
											},function (err) {
												console.log(err)
										});	

								 })

						  }
					 })
                    
			}
	}
</script>

<style>
    .shaixuan{
		display:none; 
	}
	.shaixuana{
		position:absolute;
		right:-320px;
	}
</style>