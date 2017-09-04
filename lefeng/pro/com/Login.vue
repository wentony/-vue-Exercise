<template>
	<div>
        <header class="header  comheader">
		   <div   class="detailHeaderImg">
				<div  class="iconfont  comicon"  @click="back()">&#xe664;</div>
		   </div>
		   <div  class="homeHeaderIpt">
				<div   class="detailTitle">登 陆</div>
		   </div>
		   <div   class="homeHeaderIcon">
				<div class="iconfont">&#xe608;</div>
		   </div>
	    </header>
        <div   class="registeript">
               <div    id="ipt1">
                   <input  type="text"  name="username"  v-model='username'  placeholder = "用户名" />
              </div> 
              <div   id="ipt3">
                   <input  type="password"   name="password"  v-model='password'  placeholder = "密码"/>
              </div> 
              <div  class="logincun">
                  <span  class="isred"  id="isred"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAABLUlEQVRIx7XUTytEURgH4JFINlZWRikTpZSSpJTSFFlMUhZslIWVUla+gYW9T+AL2NnYW9tYKCVKlFBDSB4LR96mhvl3383t3vs773POubeTy2VcWMRi1k4O277rE31ZQlt+6wxdWUGbaTVwjnxW0EaALtCfFbQeoEsMZAWt4SNBVxisFuxoEloJ0DUK1YJ7eMdqg9BygG4w/Ff4KAXfMFsntJQmCncY+W9AIQXhEaM1QqU0wR+opnE5TOI5fNz8P/mFAN1jrN69L4W9P0VPldwcXlPuAeN1QaHRTjhijtFZ8b4YduAREw1BoeF+AA/Qlp7PBOgJU01BqWk7DgO4i2mU030Z001DAezGSQBf0vUZMy2DAtibTmwBKrYcCmABt+kvnc8MqljhUCt6fQGOvedru0RGQwAAAABJRU5ErkJggg=="/></span>
                  <span >一个月内免登陆</span>
              </div>
              <div   class="btn"  id="loginbtn"> 登 陆</div>
              <div  class="logintext"><span   @click = "register()">立即注册</span><span>忘记密码</span></div>
        </div>
         <div  id="toast"></div>
    </div>
</template>
<script>
   import router from "./../router/router.js";
   import  ajax  from  './../md/MyAjax.js';
   import  toast  from  './../md/toast.js';  
    export default {
        data(){
           return{
             username:"",
             password:"",
             one:true
           }
        },
        methods:{
          back(){
              window.history.go(-1)
          },
          register(){
             router.push({
					  path:"register"
				  })
             }
        },
        mounted(){
            var that = this
             $("#isred").on("click",function(){
                 if(that.one){
                    $("#isred").removeClass("isred")
                    $("#isred").addClass("isgray")
                     that.one = false;
                 }else{
                     $("#isred").removeClass("isgray")
                    $("#isred").addClass("isred")
                     that.one = true;
                 }
             })
             $("#loginbtn").on("click",function(){
                      if(that.username == "" && that.password == ""){
                          toast.makeText("登陆信息不能为空",2000)
                        }else{
                            $("#loginbtn").html("正在登陆...")
                            console.log(that.username,that.password)
                            var url = "http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID="+that.username+"&password="+that.password;
                                      //var url ='http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID='+userID+'&password='+password;
                            ajax.fetch(url,function(data){
                                console.log(data)
                                $("#loginbtn").html("登 陆")
                                if(data == "0"){
                                  toast.makeText("用户名不存在",2000)
                                }else if(data == "2"){
                                   toast.makeText("用户名密码不符",2000)
                                }else{
                                   toast.makeText("登陆成功",2000)
                                   router.push({
                                            path:"home"
                                        })
                                    localStorage.setItem("login","1")
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