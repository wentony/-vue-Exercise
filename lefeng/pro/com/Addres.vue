<template>
    
	<div >
	    <header class="header  comheader">
		   <div   class="detailHeaderImg">
				<div  class="iconfont  comicon"  @click="back()">&#xe664;</div>
		   </div>
		   <div  class="homeHeaderIpt">
				<div   class="detailTitle">新增地址</div>
		   </div>
		   <div   class="homeHeaderIcon">
				<div class="iconfont">&#xe608;</div>
		   </div>
	    </header>
        <div  class="addres">
             <div  class="addres1  addres2">
                 <div  class="addres1a">
                       收货人
				 </div>
				 <div  class="addres1b">
					 <input  type="text"   v-model="people"/>
				 </div>
			 </div>
			 <div  class="addres1  addres2">
                 <div  class="addres1a">
                       身份证
				 </div>
				 <div  class="addres1b">
					 <input  type="text"   v-model="peopleid"/>
				 </div>
			 </div>
			 <div  class="addres1  addres2">
                 <div  class="addres1a">
                       手机号码
				 </div>
				 <div  class="addres1b">
					 <input  type="text"   v-model="phone"/>
				 </div>
			 </div>
			 <div  class="addres1  addres2">
                 <div  class="addres1a">
                       收货时间
				 </div>
				 <div  class="addres1b">
					  <select    v-model="time1">
						<option >收货时间不限</option>
						<option >周六日/节假日收货</option>
						<option >周一至周五收货</option>
					  </select>
				 </div>
			 </div>
			 <div  class="bak"></div>
			 <div  class="addres1  addres2">
                 <div  class="addres1a">
                       省份
				 </div>
				 <div  class="addres1b"   >
					  <select   v-model="time2">
						<option >北京</option>
						<option >河南</option>
						<option >河北省</option>
						<option >内蒙古</option>
						<option >辽宁省</option>
						<option >吉林</option>
						<option >浙江省</option>
						<option >安徽省</option>
						<option >江西省</option>
						<option >福建</option>
						<option >山东省</option>
						<option >山西</option>
						<option >陕西</option>
					  </select>
				 </div>
			 </div>
			 <div  class="addres1  addres2">
                 <div  class="addres1a">
                       城市
				 </div>
				 <div  class="addres1b">
					  <select   v-model="time3">
						<option >郑州</option>
						<option >开封</option>
						<option >洛阳</option>
						<option >漯河</option>
						<option >南阳</option>
						<option >新乡</option>
						<option >周口</option>
						<option >驻马店</option>
						<option >信阳</option>
						<option >济源</option>
						<option >三门峡</option>
						<option >许昌</option>
						<option >焦作</option>
					  </select>
				 </div>
			 </div>
			 <div  class="addres1  addres2">
                 <div  class="addres1a">
                       县/区
				 </div>
				 <div  class="addres1b">
					  <select  v-model="time4">
						<option >中原区</option>
						<option >二七区</option>
						<option >金水区</option>
						<option >内蒙古</option>
						<option >管城区</option>
						<option >中牟</option>
						<option >惠济区</option>
						<option >郑东新区</option>
						<option >高新区</option>
						<option >新密市</option>
						<option >新郑市</option>
						<option >巩义市</option>
						<option >高新技术开发</option>
					  </select>
				 </div>
			 </div>
			 <div  class="addres1  addres2">
                 <div  class="addres1a">
                       街道
				 </div>
				 <div  class="addres1b">
					 <input  type="text"   placeholder="我不清楚"  v-model="time5"/>
				 </div>
			 </div>
			 <div  class="addres1 ">
                 <div  class="addres1a">
                       详细地址
				 </div>
				 <div  class="addres1b">
					 <input  type="text"   placeholder="填写路名、门牌号、请勿重复填写"   v-model="time6"/>
				 </div>
			 </div>
		</div>
		<div   class="addres3">
			      <div   class="addres5"></div>
                  <div   class="addres4"    @click="save()">保 存</div>
	    </div>
	</div>
</template>

<script>
	import MyAjax from "./../md/MyAjax.js";
	import router from "./../router/router.js";
	import { Toast } from 'mint-ui';
	export default {
		data(){
			return {
				classList:[],
				isOK:false,
				isList:false,
				proList:[],
				people:"",
				peopleid:"",
				phone:"",
				time1:"",
				time2:"",
				time3:"",
				time4:"",
				time5:"",
				time6:""
			}
		},
		methods:{
             save(){
               var that = this;
               var  peop = that.people
			   var phone  = that.phone
			   var  address = that.time2+"."+that.time3+"."+that.time4+"."+that.time5+"."+that.time6
               
			   var firsts = localStorage.getItem('add')==null?true:false;//判断是否有cookie进行添加
			   if(firsts){
                  localStorage.setItem('add','[{"name":"'+peop+'","phone":"'+phone+'","adds":"'+address+'"}]')
                  localStorage.setItem('firsts','false');
			   }else{
				    
                    var str = localStorage.getItem('add');
				    var arr = eval(str);
                    var obj  = {name:peop,phone:phone,adds:address};
					arr.push(obj);
					var cookieStr = JSON.stringify(arr);
					localStorage.setItem('add',cookieStr);
					Toast('保存成功！');
			    }
				 router.push({
					  path:"/cart",
				   })
			 },
			 back(){
				 window.history.go(-1)
			 }
		},
		mounted(){
		  
			console.log(eval(localStorage.getItem('add')))
		}
	}
</script>

<style >

</style>