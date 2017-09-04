<template>
	<div >
		<header class="header  comheader">
		   <div   class="detailHeaderImg">
				<div  class="iconfont  comicon"  @click="back()">&#xe664;</div>
		   </div>
		   <div  class="homeHeaderIpt">
				<div   class="detailTitle">购物车</div>
		   </div>
		   <div   class="homeHeaderIcon">
				<div class="iconfont"></div>
		   </div>
	    </header>
        <div  class="emptyCart">
            <div   class="emptyCarta">
                  <div  class="emptyCartc">
                       <img   width="100" height="100" src="https://h5rsc-ssl.vipstatic.com/lefeng/build/95273634c5d04a4370aece678ba5155e.png"/>
				  </div>
				  <p>购物车为空哦~</p>
				  <p>赶紧抢点东西犒劳自己吧~</p>
				  <div  class="emptyCartd">
					  <span  class="emptyCarte"  @click = "homebak()">去首页逛逛</span>
				  </div>
			</div>
            <div  class="emptyCartb">
                 <ul>
                    <li  v-for="item  in  list">
                       <div  class="emptylist">
                         <img   v-bind:src="item.img"/>
					   </div>   
                       <div  class="emptylista">
						   <p><span>{{item.name}}</span><span>{{item.title}}</span></p>
						   <p><span>￥</span><span>{{item.price}}</span></p>
						   <p><span  @click="minus(item.id)"  id="disab">-</span>{{item.num}}<span  @click="add(item.id)">+</span><span   class="iconfont"  @click="detal(item.id)">&#xe648;</span></p>
					   </div> 
					</li>
				 </ul>
				 <div   class="emptyCartbfooter">
					 <div  class="cartfooter">
                         <span>待支付：</span><span  id="total">{{price}}</span>
					 </div>
					 <div   class="cartfootera">
                         <span  @click="addres()">结 算</span>
					 </div>
				 </div>
			</div>
		</div>
	</div>
</template>

<script>
  import router from "./../router/router.js";
	export default {
		data(){
			return {
				list:[],
				price:""
			}
		},
		methods:{
			back(){
              window.history.go(-1)
			},
			addres(){
				var that = this
              if(eval(localStorage.getItem("add")) == ""  || eval(localStorage.getItem("add")) == null){
				 router.push({
					  path:"/addres"
				 })
			  }else{
                 router.push({
					  path:"/settlement"
				 })
				 var arr = that.price
				var arr1 = JSON.stringify(arr);
                localStorage.setItem('zongjia',arr1);
			  }
			},
			homebak(){
               router.push({
					  path:"/home"
				  })
			 },
			minus(a){
			 var that = this
             var arr = eval(localStorage.getItem("goods"))
             for(var attr in arr){
					if(arr[attr].id == a){
						if(arr[attr].num == "1"){
                           arr[attr].num = 1
						   $("#disab").attr("disabled","disabled")
						}else{
                            arr[attr].num = Number(arr[attr].num) - 1;  
							var cookieStr = JSON.stringify(arr);
							localStorage.setItem('goods',cookieStr);
							that.list = arr;
							that.price=Number(that.price)-Number(arr[attr].price)
						}
					}
				}

			},
			add(b){
				var that = this
			   var arr = eval(localStorage.getItem("goods"))	
               for(var attr in arr){
					if(arr[attr].id == b){
						arr[attr].num = Number(arr[attr].num) + 1;  
						var cookieStr = JSON.stringify(arr);
						localStorage.setItem('goods',cookieStr);
						that.list = arr
						that.price=Number(that.price)+Number(arr[attr].price)
					}
				}
			},
			detal(index){
				console.log(index)
				var that = this
				var arr = eval(localStorage.getItem("goods"))	
				 for(var attr in arr){
						if(arr[attr].id == index){
							that.price=Number(that.price)-arr[attr].num*arr[attr].price
							arr.splice(attr,1)
							var cookieStr = JSON.stringify(arr);
							localStorage.setItem('goods',cookieStr);
							that.list = arr
							
						}
					}
                  if(eval(localStorage.getItem("goods")) == "" || eval(localStorage.getItem("goods")) == null){
			  
				        	location.reload()   
				   }


		      }
		},
		
		mounted(){
			var that  =this;
           console.log(eval(localStorage.getItem("goods")))
           that.list =  eval(localStorage.getItem("goods"))


           var arr = eval(localStorage.getItem("goods"))	
           for(var op in arr){
              console.log(arr[op].num*arr[op].price)
              that.price=Number(that.price)+arr[op].num*arr[op].price
		   }
          if(eval(localStorage.getItem("goods")) == "" || eval(localStorage.getItem("goods")) == null){
             $(".emptyCartb").css("display","none")
             $(".emptyCarta").css("display","block")
		  }else{
             $(".emptyCartb").css("display","block")
             $(".emptyCarta").css("display","none")
		   }
 

		}
	}
</script>

<style>

</style>