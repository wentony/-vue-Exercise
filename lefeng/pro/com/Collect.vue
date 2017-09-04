<template>
	<div>
       <header class="header  comheader">
		   <div   class="detailHeaderImg">
				<div  class="iconfont  comicon"  @click="back()">&#xe664;</div>
		   </div>
		   <div  class="homeHeaderIpt">
				<div   class="detailTitle">收 藏 宝 贝</div>
		   </div>
		   <div   class="homeHeaderIcon">
				<div class="iconfont"   @click="hom()">&#xe608;</div>
		   </div>
	    </header>
        <div   class="collectlist">
          <ul>
             <li   v-for="item   in  list">
				 <div  class="collectlista">
                     <div  class="collectlistb">
                         <img  v-bind:src="item.img"/>
					 </div>
					 <div   class="collectlistc">
                           <p>{{item.name}}</p><br/>
						   <p>{{item.title}}</p>
					 </div>
					 <div   class="collectlistd"  @click="cancel(item.id)">
						   取消收藏
					 </div>
				 </div>
			 </li>
		  </ul>
		</div>
    </div>
</template>
<script>
   import router from "./../router/router.js";
	export default {
		data(){
			return {
				list:[]
			}
		},
		methods:{
			back(){
               window.history.go(-1)

			},
			hom(){
                router.push({
					  path:"/user"
				 })

			},
			cancel(index){
                var that = this
				var arr = eval(localStorage.getItem("collect1"))	
				 for(var attr in arr){
						if(arr[attr].id == index){
							arr.splice(attr,1)
							var cookieStr = JSON.stringify(arr);
							localStorage.setItem('collect1',cookieStr);
							that.list = arr
						}
					}
			 }
		},
		mounted(){
		   var that = this;
           var str = localStorage.getItem('collect1');
			// console.log(str)
		   var arr = eval(str);
           that.list=arr
           console.log(arr)


		}
		
	}
</script>

<style type="text/css">

</style>