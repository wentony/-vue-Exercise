<template>
	<div>
        <header class="header  comheader">
		   <div   class="detailHeaderImg">
				<div  class="iconfont  comicon"  @click="back()">&#xe664;</div>
		   </div>
		   <div  class="homeHeaderIpt">
				<div   class="detailTitle">注册</div>
		   </div>
		   <div   class="homeHeaderIcon">
				<div class="iconfont"></div>
		   </div>
	    </header>
        <div   class="registeript">
               <div    id="ipt1">
                   <input  type="text"  name="username"  v-model='username'  placeholder = "用户名" />
              </div> 
              <div   id="ipt2">
                   <input  type="password"   name="password"  v-model='password'  placeholder = "密码"/>
              </div> 
              <div   class="btn"> 一 键 注 册</div>
        </div>
         <div  id="toast"></div>
    </div>
</template>
<script>
    import  MyAjax  from  './../md/MyAjax.js';
	import  toast  from  './../md/toast.js';  
    export default {
          data(){
              return{
                 username:"",
                 password:""

                 }
        },
        methods:{
          back(){
             window.history.go(-1)
          }
        },
        mounted(){
            var that= this
           $(".btn").on("click",function(){
               
               if(that.username == "" && that.password == ""){
                    toast.makeText("用户信息不能为空",2000)
               }else{
                 console.log(that.username,that.password)
                            $(".btn").html("正在注册...")
                            var url = "http://datainfo.duapp.com/shopdata/userinfo.php?status=register&userID="+that.username+"&password="+that.password;
                            MyAjax.fetch(url,function(data){
                                console.log(data)
                                $(".btn").html(" 一 键 注 册")
                                if(data == "0"){
                                   toast.makeText("用户名重名",2000)
                                }else if(data == "1"){
                                   toast.makeText("注册成功",2000)
                                }else if(data == "2"){
                                   toast.makeText("服务器错误",2000)
                                }
                            },function(err){
                                console.log(err)
                            })

               }
           })
        }

    }
</script>
<style>


</style>