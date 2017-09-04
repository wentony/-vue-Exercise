<template>
	<div >
		 <header class="header  comheader">
		   <div   class="detailHeaderImg">
				<div  class="iconfont  comicon"  @click="back()">&#xe664;</div>
		   </div>
		   <div  class="homeHeaderIpt">
				<div   class="detailTitle">我的蜂巢</div>
		   </div>
		   <div   class="homeHeaderIcon">
				<div class="iconfont">&#xe608;</div>
		   </div>
	    </header>
        <div  class="usertitle">
              <span>
				  <img  width="60"    height="60"   src="https://h5rsc-ssl.vipstatic.com/lefeng/build/f39c984d8edd5e686a2a88e59a87d886.png"/>
			  </span>
			  <span><i  @click="login()">登陆</i>/<i  @click="register()">注册</i></span>
			  <span  class="iconfont">&#xe60a;</span>
		</div>
		<div   class="Orderform">
              <span>我的订单</span><span  class="iconfont">全部订单   &#xe604;</span>
		</div>
		<div   class="paylist">
            <ul>
               <li>
				   <img   width="22"   height="22"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAAXNSR0IArs4c6QAABJFJREFUeAHt3NtvVEUcB/Dv7LaVWtFGIdSEVKgNiokBCRpe8MUXJQETa5sY45MP/gcaAhq5hDee8d0ntzYmvpjwwBMaS72ESwLeEIwoaLGXpSxS3OE3dLe7xe12zv5mtz2T7ySbPXvOb+bMfHZ29uyeOQdgogAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUSCZgkoXXjrYHcm/BYg8MngJMpnZUmtbaSVgzhs7MUfPewO8haq6GtgeGc7B2MERlVlwZBlPIml1m/+BX2rqpep/05LejRXayFo/gDj62uVyHFrpNVYDFa/P5t24AdmwCMuoPyXyRy7YwOQN8dgoo3JYq2D5cyG6RhTFNfXTQME+7t/1e2rkZePQhTV1WTt61DwP9PcDZ30p1svLdo4NWDR2CXMmfrSyuHDFFTTLV7alqZ4NFVpfWYBHM5iNAaB+lADGEDoDoUwShfZQCxBA6AKJPEYT2UQoQQ+gAiD5FENpHKUAMoQMg+hSh/Anus4uUxmzbCPSuuYV8YQwTUxe0rSD0YoK9axz0Ktm8Ux7ji4X5rufQ4SuljIunR1/PAyflE37lH+Dmv0qW+7IXbp+yHw5PyZ9o3yGLY+b9oRP3RSz5Mg7oH/4APv0auPPfkg1uMOAxyecefSiaAXtweL/5YPBIkrLSP3S43vv5N81EXuhprUHRHrKHR3Ys3FD/Vfqhf7oafqiob+a2ZuTT8+bSYZWI9ENfm6y0prVLW5PsLv3Qs00bl+s7GnTWD1i4Nf3QC9tT+1WXHA73dAPLeLotjqOO2rxza3dtA55/cm55Rr44R+To5Ne/6uVoyra4e7SbAlFGdnxdDwCvy8FCe+v7V9zQfev+3zsfFOzHZRhpcYobOl+ozZm/VXt9E9fGDT36c2m2UZXgmcvAxI2qFa1ZbP1g1Zp2ze1l+ibw0fG5qWqr5WjsknwJfnuxlTWY31fc0K6Z0zJ8HD893+DlWoh76GimqjWlSYd+O0k/dHeXX0uDR9lLSYpMP/QTciZkOZLBySS7TT/0evmb+NneJG0OEXsOm3EsSUHph3at3bMdeKFfLp9pwSR4Y75AG142Q0Nulrp3iuOooy0LvPIc8OIzwJ8TwEzgHySjP76Lq/mL6DDfm70DDR0fxgFd7lfuvww3Uz902rJhxBjTEHC5KnEMHeXWrODnuHp0SOgT54DzV2YxNXNZTly5i4VUPZrQi7057hfl+HS7bO6XK81WLxbmu55Dh6+UMo7QSkDf7IT2lVLGEVoJ6Jud0L5SyjhCKwF9sxPaV0oZR2gloG92QvtKKeO00DLru5TGZSJ4TMlNbC8ng0o7y+sSPut+ghuMyu06ZM6VpE++dNd8yIRW7XuXsAXNCHc3Rvl7ulxyEZkO1U1RXEE66FXZIygU35BLDrrhZnX+cq1cuXieDY6afa+qG6bqfvfuoNWeeUnuDnY2HtlSSwxm5ZTNYfT07QvRtmDnfuyh3EYUM5vkL0U53ZHyZIsTWNd52ryzW2bgMFGAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAF0iNwFyFQ0lT0RXuBAAAAAElFTkSuQmCC"/>
			        <br />待支付
			   </li>
			   <li>
				   <img  width="22"   height="22"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAAXNSR0IArs4c6QAABL1JREFUeAHtnNtrFUccx79zzkmi9RIiGLGx3mLrrVZaowFDW6FIQWofKslLH3xU7EOhD+KDCl4oFIrtQ+lD/4RjFSqCCj60kooPVYRaI1W0tEjFUuM9OcZzxt8mnj0b2YyZ2XHPGr4Dy878fvO7zGdnh5OdzQIsJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJJBJAipLWem9Py5HRW+H0lMS5aWhkVO/qt3d3yby49E4W6D3FHsFUZe38RVUl9rZfdqbvwSOcglsX4CpavXqVHv2lyC5QgLbYVO9/9A86PJqmYlzoZXlHaIq2L3pVJjDl4ebMFQOm4krb8xu11qvCv18d2wRbj2YE7afW1GDyFX60Dr5jNqy8eFzuxs6OIPWxWIj+tQBlMtbBXJ+JIY2hIpVPRZpLYfprwD/34vt6CRcOf/rUXZKnYbWa0fJjA0ZT3Ddbwxc1/uK29SuniPG7gal+9JxUX0jSX9Wg2yIMpYqp55eoLE6eJbPau508qjRJsAP6v3FNU72YlSbTRYe9Fc/TcNAaWtoMn8mMLsFsF45YLnUhBHdKovb8mi2+EHzSG64P/8F7g6vGo14jM8l8KcuwZ1AY6i0UoKN3A0B4M3rXGKnb7NiLhAcNuWdfuCHkyMWCm/bmEb7ui0d5XxD6GRSrRrKJlIlOj4N58G6gZ5IIFMaC0ETdEoEUgrDGU3QKRFIKQxnNEGnRCClMJzRBJ0SgZTCuP0JHk2u/wHwy8WoxL3+sORuG2d54R958nY7TjN+mbZ+IhnrOzno2wL65z9indddeOHv5Ck0y6NbD4VrtAeI43GRfEYHV9z2idhYmZ29Cgw8GktrL18mmykzptrbPWvRe+lZiXU7OehgIB+ssA4ca9B3fXygc3IjViqxLkYJ35oHLH51lMi60X8fyARo68wdDYJNhY6FQNcSYEoTcPkGcPx89aG8o9P0zJLP6DRybZFdkY9XA8FOTrUsbQPaZwEnBPa5a1VpZs/ZBj08i9uB9bI0NcSk2iiyjR3A8teAI78BdxJtVL/Qi5StXx2TG2uDbZG1f/P7wAbZPYqDXOsJLJSZve1DYJUsLdES9ReV16EeM03qkEU1ZOcioDQELJFl4d2lAthikzyY3R/JKxzB7A7+gGqSdtuMque6n7MF+k3ZOA2OJGVBKxAcGSvZWjoyBsdnOgTtk6bBF0Eb4PhUEbRPmgZfBG2A41NF0D5pGnwRtAGOTxVB+6Rp8EXQBjg+VQTtk6bBF0Eb4PhUEbRPmgZfBG2A41NF0D5pGnwRtAGOTxVB+6Rp8EXQBjg+VQTtk6bBF0Eb4PhUEbRPmgZfBG2A41NF0D5pGny5gS6U5R+kn5bgsw/3B6utiXf+67/omG5FGzZ1t/c6Xsfv6EO/fEKiBXcHgANHR148tP26gU2m9eg7JF83GJQXesKiToVVy4rzZxz0voOfoKwPWcZ7mbtfwSR0qB09d1wG4bZ0SCS1q/uwfInrPan2yjGB1w51U0b7Paaj0xVycGGcZ3RgXC3y2Z88LudbUSh48Vf1W/dzQ2lQfdHjvC7XPX8mQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQALZIfAEk8HFTsb/n8gAAAAASUVORK5CYII="/>
			        <br />待收货
			   </li>
			   <li>
				   <img  width="22"   height="22"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABaCAYAAAA1tjFFAAAAAXNSR0IArs4c6QAABOlJREFUeAHtnE1oFVcUx/83HyZGX7RGW1O/Uo2RiIqViNTQIgW/FqKLqItu7MriUhAD2opPEWw3pZu6apeCpq0iqIsuRLSCqCgiBlp52ShRilSt5sv3rufmOfOez8TJezlzZmLOgcnM3Dlzzzm/ue/MzM29A6goASWgBJSAElACSkAJKAEloASUgBJQAkpACSiBmBIwcfDLHj2dQG/fF4BZRv5UMfpkqc4ulOEv823b34z1llxV5MDtoZPrkLa/UgQflxxF8IkZUvkR9fPbzc6WgWD18DTKwqs6uGZ75PcmZOwp0gwTtnPExbkb3al9bidKiRQ4+tMHYTFRDIDFPvvT2Voxe0MYiha4sauG8CnEIluBJ89XhGggsOqKQI0iFWzyt1bY9BpYM/2tU2sqH2LP5k6/PNkxC9TERWXJ3E3W2qmDNs9cS+BG15sXoMykYHAurJssG3AKwiDZ8TMy6Z1ZgEOAzNi7dKzZB1xOP7CXaX9XZKNx5m6y4xYgUX2FLvhng9venwz5bcz3Ntmxy3zX9otXzLXmSynJjh2w9jXsYdyrS+RgD6MiWlxb8yZsz7i1VbCZY/bIicVeEdearYUT7G98p5pnA/PeziiYXO2rxGJjDvm4YXnOFfejvNUFdP/nMl0l+s3XVLInpzD6LT7gBkv9dLy5hV5fKoO9mzgBeNYTrMep4Wx6MoMeWNySL9MmAccvZ0uMXZp/iGObL6XkP96NBLbzvv4DjhiKqyPIZnXeBcmPqTgrw2rzAR/WxDsOtC5yN6h3KDAfWvEJUFPFXGlx1UULfC7l0I2UQyvKi/O6FO3GmcD6vHxdSh0M5/Dl8FKdWdkIzP8I6HwAPKSbVdp1ezDKVMrJ7gbeFHbvwch8jh6487MuAbj0Mg4k2pQyDgAXhqjAC4mEvK/AQwZcWL0CLyQS8r4CDxlwYfVyTyn/dAN/XAV6+wt9iGbfvQ1voi6IZuohFhQ54DdSwIs+wdACTPXQhb9+Txy4XEpZ3gBUj6BDK4AT2+EJ1NY+pVd9YZFr4U31wN4t1O05xD8mhIMeNCfZh5MXnxxwz2hEgXrmo17LpZSoI42JfQUufCEUuAIXJiBsTlu4AhcmIGxOW7gCFyYgbE7uxefRE+D8TcD1YcRBXOfVWhr/P2uaqDdywC/SsMLUI9HgAo1duAN89XmgGqeCXA5vmMHpN09dDR/y1FNELXItvGUBDVWgDqyeSGd85NBUUehuCIWwyAF3gdXW0CIcYczMyaWUmAUelTsKXJi8AlfgwgSEzWkLV+DCBITNaQtX4MIEhM3Jvfj83wtcojmxceq8cmPSp9DLmKDIAf/zdnZKnmBwgabcDLrtqwPVOBXkcnit3DcMRgwoAp/kWviXSwA3iSpOKWUhTbQSFjngLjA3k2yci1xKGeegvfAVuEdCaK3AhUB7ZhS4R0JorcCFQHtmFLhHQmjNCfyp7/Nzeo0fq+K6IHwxuZj8stFt8D2HG3OLppNkB3m4D7wID7AZHYa8s91HFnJCI5d4hQ84zA80gScL/P5jwC1jWYx5hnJ7jDsEtpRiDrSdQZnZS1+cecntZAT1/UtxbDX7t93nts3+OR57+NQcZAZaqbVTx8kYFIsUfW74kmnfRoMhVZSAElACSkAJKAEloASUgBJQAkpACSgBJaAElIASUAJK4D0h8Aokjs7xz6C5JAAAAABJRU5ErkJggg=="/>
			       <br />待评价
			   </li>
			</ul>
		</div>
		<div   class="baks"></div>
		<div   class="bas"    @click="addres()">
			<span  class="iconfont">&#xe61c;  收货地址</span><span  class="iconfont">河南   &#xe604;</span>
		</div>
		<div   class="baks"></div>
		<div   class="bas  bass">
			<span  class="iconfont">&#xe605;  我的优惠券</span><span  class="iconfont">&#xe604;</span>
		</div>
		<div   class="bas">
			<span  class="iconfont">&#xe61a;  我的花粉</span><span  class="iconfont">&#xe604;</span>
		</div>
		<div   class="baks"></div>
		<div   class="bas  bass"   @click="collect()">
			<span  class="iconfont">&#xe6fb;  我的收藏</span><span  class="iconfont">&#xe604;</span>
		</div>
		<div   class="bas">
			<span  class="iconfont">&#xe61f;  浏览记录</span><span  class="iconfont">&#xe604;</span>
		</div>
		<div   class="baks"></div>
		<div   class="bas  bass">
			<span  class="iconfont">&#xe670;  意见反馈</span><span  class="iconfont">&#xe604;</span>
		</div>
		<div   class="bas  bass">
			<span  class="iconfont">&#xe64c;  在线客服</span><span  class="iconfont">&#xe604;</span>
		</div>
		<div   class="bas  bass">
			<span  class="iconfont">&#xe639;  关于乐蜂</span><span  class="iconfont">&#xe604;</span>
		</div>
		<div  class="tuichu">
             <div  class="tuichua"  @click="login1()">退出登录</div>
		</div>
	</div>
</template>

<script>
   import router from "./../router/router.js";
	export default {
		data(){
			return {
				
			}
		},
		methods:{
            back(){
              window.history.go(-1)
			},
			addres(){
               router.push({
					  path:"/addres"
				  });
			},
			collect(){
               router.push({
					  path:"/collect"
				  });
			},
			login1(){
			  router.push({
					  path:"/login"
				  });
              localStorage.setItem("login","0")
			},
			login(){
                 router.push({
					  path:"login"
				  })

			},
			register(){
                router.push({
					  path:"register"
				  })
			}
		}
	}
</script>

<style>
</style>