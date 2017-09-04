<template>
	<div >
		<header class="header  comheader">
		   <div   class="detailHeaderImg">
				<div  class="iconfont  comicon"  @click="back()">&#xe664;</div>
		   </div>
		   <div  class="homeHeaderIpt">
				<div   class="detailTitle">结算</div>
		   </div>
		   <div   class="homeHeaderIcon">
				<div class="iconfont"></div>
		   </div>
	    </header>
		<div  class="bak"></div>
		<div  class="messige">
              <div  class="messigea">
                  <div   class="messigea1">收货信息</div>
				  <div   class="messigea2">
				  </div>
				  <div   class="messigea3">
                      <p><span>{{name}}</span><span>{{phone}}</span></p>
                      <p>{{address}}</p>
					  <p  @click="addr()">更多地址</p>
				  </div>
			  </div>
		</div>
		<div  class="bak"></div>
		<div   class="pay">
             <div  class="paya">支付方式</div>
             <div  class="payb">
				 <span   class="iconfont  writes"  disabled="disabled">&#xe62a;</span>
				 <span>花粉</span><span>暂不满足使用</span>
			 </div>
			 <div  class="payc">
                  <span   class="iconfont   disxuan">&#xe62a;</span>
				  <span  class="iconfont">&#xe625;</span><span>支付宝网页版</span>
			 </div>
			 <div  class="payd">
				 <span   class="iconfont  writes" >&#xe62a;</span>
				 <span   class="iconfont">&#xe63a;</span><span>银行卡支付</span>
			 </div>
		</div>
		<div  class="bak"></div>
		<div  class="const" >
             <div  class="consta  bor">费用详情</div>
			 <div  class="constb  bor"><span>商品总金额：</span><span>￥{{price}}</span></div>
			 <div  class="constc"><span>乐蜂发货运费</span><span>￥10</span></div>
		</div>
		<div  class="bak"></div>
		<div  class="constd"><span>开具发票</span><span>不开发票</span></div>
		<div  class="bak"></div>
		<div  class="setfooter">
			<div  class="cartfootera">
                <span>总金额：</span><span  id="total">{{price}}</span>
			</div>
			<div   class="cartfooterb">
                <span  @click="paya()">支 付</span>
			</div>
		</div>
		<div   class="setfooters"></div>
		<div   class="paiweixin">
               <div   class="paiweixina">
				   <img  src="../img/img3.png"/>
                   <p  @click="dis()">支付完成</p>
			   </div>
		</div>
	</div>
</template>

<script>
 import router from "./../router/router.js";
	export default {
		data(){
			return {
				name:"",
				phone:"",
				address:"",
                price:""
				
			}
		},
		methods:{
			back(){
				window.history.go(-1)
			},
			paya(){
                $(".paiweixin").css("display","block")
			},
			dis(){
              $(".paiweixin").css("display","none")
			},
			addr(){
              router.push({path:"/addres"})
			}
		},
		mounted(){
			var  that = this
            var  arr = eval( localStorage.getItem('add'))
            console.log(arr)
            that.name= arr[arr.length-1].name
			that.phone  = arr[arr.length-1].phone
			that.address = arr[arr.length-1].adds
            var  arr3 = eval( localStorage.getItem('zongjia'))
			console.log(arr3)
            that.price = arr3

		}
	}
</script>

<style type="text/css">
       .disxuan{
		   color:#FF0056;
	   }
	   .writes{
		   color:#fff;
	   }
</style>