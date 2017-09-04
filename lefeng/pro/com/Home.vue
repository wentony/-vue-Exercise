<template>
	<div >	
	   <div   id="loading1">
		  <div  id="loading2">
			<header class="header  header1">
				<div   class="homeHeaderImg">
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAA0CAYAAABW3GwMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDZBMDczRUY0QzgxMTFFNTkxOUZGNENCMDQ4Q0E5QUMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDZBMDczRjA0QzgxMTFFNTkxOUZGNENCMDQ4Q0E5QUMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENkEwNzNFRDRDODExMUU1OTE5RkY0Q0IwNDhDQTlBQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENkEwNzNFRTRDODExMUU1OTE5RkY0Q0IwNDhDQTlBQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PixnZMwAAAxSSURBVHja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"/>
				</div>
				<div  class="homeHeaderIpt">
					<div  id="homeIpt"  @click = "searchgo()">
						<span  class="iconfont">&#xe602;</span>搜索商品
					</div>
				</div>
				<div   class="homeHeaderIcon">
				   <div class="iconfont"   @click="user()">&#xe69a;</div>
				</div>
			</header>
			<mt-swipe :auto="4000">
			<mt-swipe-item  v-for="item  in  list"><img  v-bind:src = "item.filename"/></mt-swipe-item>
			</mt-swipe>
			<div  class="homeContent">
				<ul  class="homeContentUl">
					<li   v-for="item1  in  lista"><img   v-bind:src="item1.filename"/></li>
				</ul>
			</div>
			<div  class="homeContentbc"></div>
			<div   class="homeContentimg1">
				<a  href="https://w-ssl.lefeng.com/a/1902294"  class="bigurl"></a>
			</div>
			<div  class="homeContentimg2">
				<a  href="https://w-ssl.lefeng.com/a/1902294"  class="bigurl1"></a>
			</div>
			<div  class="homeContentimg3">
				<a  href="https://w-ssl.lefeng.com/a/1902294"  class="bigurl2"></a>
			</div>
			<div  class="homeContentimg4">
				<div  class="homeContentimg4-a"><img src="//b.appsimg.com/2017/08/18/6621/c0254633aefcd51435111fcbde7fc470.jpg"/></div>
				<div  class="homeContentimg4-a"><img src="//b.appsimg.com/2017/08/18/536/300cc8e7f67d8d86be7770100cd88e62.jpg"/></div>
				<div  class="homeContentimg4-a"><img src="//b.appsimg.com/2017/08/18/4730/0ffc4a63776127c5d6ed830fc7911e8a.jpg"/></div>
			</div>
			<div  class="homeContentimg5">
				<a  href="http://w.lefeng.com/brand/800045081?m=brand&brand_id=800045081"  class="bigurl4"></a>
				<a  href="http://w.lefeng.com/brand/800045281?m=brand&brand_id=800045281"  class="bigurl4a"></a>
				<a  href="http://w.lefeng.com/brand/800045286?m=brand&brand_id=800045286"  class="bigurl4a"></a>
				<a  href="http://w.lefeng.com/brand/800045296?m=brand&brand_id=800045296"  class="bigurl4a"></a>
				<a  href="http://w.lefeng.com/brand/800045291?m=brand&brand_id=800045291"  class="bigurl4a"></a>
			</div>
			<div  class="homeContentimg6">
				<a  href="https://w-ssl.lefeng.com/a/1898574"  class="bigurl5"></a>
			</div>
			<div  class="homeContentimg7">
				<a  href="https://w-ssl.lefeng.com/a/1894523"  class="bigurl6"></a>
				<a  href="https://w-ssl.lefeng.com/a/1894848"  class="bigurl6"></a>
				<a  href="https://w-ssl.lefeng.com/a/1894632"  class="bigurl6"></a>
				<a  href="https://w-ssl.lefeng.com/a/1899256"  class="bigurl6"></a>
				<a  href="vslefeng://Global"  class="bigurl6a"></a>
				<a  href="https://w-ssl.lefeng.com/a/1121868"  class="bigurl6a"></a>
				<a  href="https://w-ssl.lefeng.com/a/1904149"  class="bigurl6b"></a>
			</div>
			<div  class="homeContentimg8">
				<div  class="homeContentimg8a">
				<img  src="//b.appsimg.com/2017/08/18/3744/3c74ce94eb14d32effbf47741733628c.jpg"   data-original="//b.appsimg.com/2017/08/18/3744/3c74ce94eb14d32effbf47741733628c.jpg"/>
				<img  src="//b.appsimg.com/2017/08/18/9845/3c74ce94eb14d32effbf47741733628c.jpg"   data-original="//b.appsimg.com/2017/08/18/9845/3c74ce94eb14d32effbf47741733628c.jpg"/>
				<img  src="//b.appsimg.com/2017/08/18/1174/3c74ce94eb14d32effbf47741733628c.jpg"   data-original="//b.appsimg.com/2017/08/18/1174/3c74ce94eb14d32effbf47741733628c.jpg"/>
				<img  src="//b.appsimg.com/2017/08/18/9945/3c74ce94eb14d32effbf47741733628c.jpg"   data-original="//b.appsimg.com/2017/08/18/9945/3c74ce94eb14d32effbf47741733628c.jpg"/>
				</div>   
			</div>
			<div class="homeContentimg9">
					<ul>
						<li  v-for="itema  in  listb"   @click="detail1(itema.adlink)">
							<img v-bind:src="itema.filename"/>
						</li>
					</ul>
			</div>
			<div  class="homeContentbc"></div>
			<div  class="homeContentbd">
				<ul>
					<li  v-for="itemb  in  listc"   @click="detail2(itemb.adlink)">
					<img  v-bind:src="itemb.filename"/>
					</li>
				</ul>
			</div>
			<div  class="homeContentbe">
				<span><span  class="iconfont">&#xe60d;</span>品牌专场<span  class="iconfont">&#xe60d;</span></span>
			</div>
			<div  class="homeContentbf">
				<ul>
					<li  v-for = "i in listd"   @click="detail3(i.bid)">
						<img  v-bind:src="i.brandImage"/>
						<p>{{i.pms}}</p>
						<p><span>{{i.agio}}</span><span>{{i.name}}</span></p>
					</li>
				</ul>
				<ul>
					<li  v-show="isloading"   v-for="v  in  listf"   @click="detail4(v.adlink)">
						<img  v-bind:src="v.brandImage"/>
						<p>{{v.pms}}</p>
						<p><span>{{v.agio}}</span><span>{{v.name}}</span></p>
					</li>
					<li  v-show="!isloading"  id="licenter">
						<img   src="http://img.zcool.cn/community/026d32563b15cb000001caeca44096.gif"/>
					</li>
				</ul>
		    </div>
		</div>	
			<div  class="homeContentbh">
				<span><span  class="iconfont">&#xe60d;</span>每日精选<span  class="iconfont">&#xe60d;</span></span>
			</div>
			<div  class="homeContentbg">
				<ul>
					<li  v-for = "j in liste"  @click="detail5(j.goods.gid)">
						<img     v-bind:src="j.goods.image"/>
						<p><span>{{j.goods.brandStoreName}}</span>{{j.goods.productName}}</p>
						<p><span>￥</span><span>{{j.goods.vipshopPrice}}</span><span>￥{{j.goods.marketPrice}}</span><span class="iconfont">&#xe634;</span></p>
					</li>
				</ul>
			</div>
			<div  id="homefooter1">
				<p><span>首页</span><span>购物车</span><span>客户端</span><span>登陆</span><span>注册</span></p>
				<p><span>联系客服</span><span>400-000-1818</span></p>
				<p>Copyright &copy; 2008-2017 Lefeng.com All Rights Reserved</p>
		   </div> 
	   </div>
		<div  class="homeCart"   @click="cart()">
				<img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA+CAYAAACP1IOOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU0ODhBQjVCNTU0MzExRTU4OUQ1QTg4MzQ5N0M1NDM1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU0ODhBQjVDNTU0MzExRTU4OUQ1QTg4MzQ5N0M1NDM1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTQ4OEFCNTk1NTQzMTFFNTg5RDVBODgzNDk3QzU0MzUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTQ4OEFCNUE1NTQzMTFFNTg5RDVBODgzNDk3QzU0MzUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6jHiHMAAADxklEQVR42uybS0hUURjHr5qWhfYwgxZJT0OCXtN7lUVl4PSwiGqjm6BVCysoSty4iCihbYui10paVlhgD6WHaQ+EHlBBJVlKWmoPy5r+H/O/cJtmnHOvOnPuoQ9+fKdzZ87M3++c73z3zC0lFApVWJY1G1SBZ5ZBlgJxz+HzQT84BirY9r2lgvXgJP99AJw1KXJ2ewm4DHLAYtBkQuRsawTVbO8yLXJieeA16ACTwS9TIif2BjwEuWCpSdPStkv0hSaKu0G/yrQ1JzYadIHfYDz4blLkvnIbGAWWmTYtxW7RrzZZXKFpa04sG3Ryn5N2n0mR6waPQQaYZ9q0FLvn8CHN+cIkuB9kqohr9FGQZPsKgKOccdNVI/dC1qbmTARbwVMwC1yRCMZKKLZwSSpjwSQW07qbfNc7oADsGyhyUqE0s+2XzfwzOMT29tQ4L75Lv8hH68/eowviiWvyWeTE5tC3qkYu4CNxRfS18cS1ETlXmeYTcevor6YqvNiemgt9IEyy+nyWi9dVxDX7KKms4RZWL7dubsQF/LTeBrorcJqcgr0DH1kJaHuHA95zas4FLSqRa6O4HLtm09QWUJh815Z4taXfkspa55R0I+6BD9ZdkVdxTZpnzCywgicH17yK03VayhlrOr9np1txH8BbMAHM0LgqqVU9ZogVvYCJ4nStVGZyi+pynB64Fndf08hNpX9kRfzk5iVyAVYDuthK+pfRzklUTcqvVzynyNdEmDyFsYft84MR50wqy5NcQ0q9uxs0cI+7CG7+80KFwtlp8lc6odmakwy5xQofzP5lI1wOVK+JIDnlkp+3T4ELVvikzhps5GQat3JaBBw1p5bmds3JX+g029Ue3p/YxekycmLjwBNG7wg4aErkxD6BneCHFX6cShJMhimRs20bOEdhEsnj4DZF2/YT9HoYWx6s60mmODF5EOcMN9Nk7XnDJs7ifdQO7jX5Maao/H420sPY8kRFZjLFWSYllP/iTBQXBHXMdD1sF3scKw2UA3lM+Rt9OfvVTNbcEFEVim1VLseSXFATY6waXo87zlAJK+YH94NKkEcq2ScWdDFeGd/TATaDXPoO9pcmUlwdP7QiyrXDvFbnYrx6vqckor+E/Q0q4wzVVtDNm8Y8HgE6bYoVfgJX1mC24ni93MOyIm5nUvlZcm2MTtkyxUNCSYvSl5HobGkfP5RGuVYacXqmYo9Y0QSjZON03qgmLFsGhymhtINNIIe+nf1liUwoRm8FNhuZFXuJtDd4HCsN7JX/awT66MvZrzTGHwEGAB8pCSGoC6h9AAAAAElFTkSuQmCC"/>
		</div>
		<div  class="homescroll"   @click = "scroll()">
				<img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGN0ZBNTQyNjg4MTVFNTExQjVEMkQ5RjJGMThENDdENCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MjAzNTg4RTE5NTQxMUU1OUJGMEIwNDIxNEFFNkI0QiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MjAzNTg4RDE5NTQxMUU1OUJGMEIwNDIxNEFFNkI0QiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFEQjRCMzUwNTIxOUU1MTE4QTE4RjEwNzRBQTJGNDlGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY3RkE1NDI2ODgxNUU1MTFCNUQyRDlGMkYxOEQ0N0Q0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+qFAU1AAACgRJREFUeNrsnW1sFEUYx+fq1ZZaWyqFtqSUFuMptAUSapASiwoRBKEkKoUAEiWAiRRNQCIkYsQAJvBBMSECwaiJiQX90ArEanxpDaC2KKUUtE0sUF6K8nZNaUsPrc//bpas29277d7u3tyxT/JP9+72dru/m33mmWd2ZlxMLHOTckgjSSNIGaShpBTSvaR40iCSj9RDukHq5tt/ky6R2khnSGdJt0S5MFeEzx9H8pAmkAr49t0mHbuX1Ew6QTrKt/+9k0DjnPmkKaRiXlrtsA7SYVIth98Xq6DvIU0nzSBlRfhOukj6ilTN3U9MgB5Mepb0JPevIhn8+9ekL0jXohV0ImkeaQ4pgYltN0lfkip4xRoVoHHMx0lLSPex6LKrpI9J35vtw80GPYxUThrPotuOkd4n/SUiaJTil0hJLDasi/QBL91h210mHAONiJdJi/h2rBiuZRIpnfRbuDF4uKDTSG+RJrLYtfu5K6wLp6IMB3Q2aTNvLse6pfPG1a+84WMb6FGkTaQh7M6xZNKjvKIccMxtpDLMJW3hJzZsx48fLy4sLLQ1/GtsbLw6duzYw2EeBi3J10mnB/KlOAO30JvhQo6UuVymBFn3cAZDrSrRqaStAuQpRDHkS14jec300cgTv83dhmMBQ34cWcjv9IR+ekG/SJrssFV1pUk8GgnbRz/CAomhiJvb7XZRhVYMYVsQ2LM5o7BAI3fxCot8T4wfcmVl5biCgoL7IGwLAtvFGQ0zChoHKBchwpAgz5w5M1t6D9sCwU7mrFxGQD/BBMjCySH39PTc7mzFtmCwx3NmAwINB79ENMhlZWW/SJ9hW0DYS5hG9lILNHpG0kSDXFVVdVX6HNsCwgaz5/SCRh/f0yJDFhz2bM4wJGh0pCaIDllg2AmcYVDQ0iMBUQFZYNjTOUtN0HgkIDHSkLu7u3VDFhR2orLAxini5qdEgDx//vwBQRYU9gx5XC0HjWffsqIVsoCwszjTfqBLoh2ygLBLlKDxt9ju/2LHjh0esyFrwca5IgC6WGIsgX6Q2fdU523r7e3t83q9vWZDVsLGOXw+X18EQIPpQ0zmrBeS5rMosL6+Pn9jyuVy7WfRYZ+RPo2TVYSOWWMFkutAN5XH4WGZga0boDFm5G6Hh2UGtjkAPdJhYbmNBOgRDgfLzV+iMxwOltswgB7qcLDchsZFoqFyB1oKQN/rcLAHdLzDwXKLB+hBDgfLLRGgbzkcrDeA7nYwWG49bg46aipEPLVv0gPldpoP/zEGLuY6hc5SOw/X0elwsNw6APpvh4Pl1g7QbQ4Hy60NoC84HOzx0edi4UrmzJmTVFNTky8qaIR351lgoidbe1nWr18/4FG3ly9f9u3atUt1iPDChQszSkpK8ioqKrrKyspaBYIMtuelgBQjYU3roN29e/eI4cOHazbtDx06dGXTpk2TBnrc06dPX8nLyzui9fn169enJiYmxk+cOPHbhoYGn/LzAwcO4DkSzf7RgwcPNs+aNavZZNCYKGudW/bCNNAejyclJyfndvo1Nzd3iNfr7b527RrmwGAXLlzoVntcgEpj3rx58/JXrFhRq1VyYePGjYsnICkqP2Db5MmTRyxatGgIfe7TuhMAVP69jIyMpAkTJmRbVKLBlkmgMU7OtOc6pkyZ0iR/jWcxACFUaSksLBxy8+bNW8EgwwA52B2xZs2aIuWdQMc8Ivt+s7Kk4+/OnTutqK9+k3IdsD+YwekRzDRyN6kXL14MOeR38+bNV3BHlJaWfrdt27Z6bKsJJRf7BHM3MNwF+DGqqqq6zG6okH6Xl2gMscWo/xl2QYUfnzZt2v9u19TUVL9fb21t7Vdaz54926G8U1avXp2HCrClpaWfq5H8MdxUMIBbt27NxHn37dvXbMFlHuZs//c0aa3NpXcQfLfyFpf8uNyysrJS5T5fslWrVjXD92/cuHG80odPnTp1FI63bNmythBuKBvHCLWfQftR2nArnDZG7Nv6jHSo21qrhMMQWdCd0QSfjIpUCuu2b9/uSUhIcG/ZsqUpVOw9evToTGXlaJKBZaMaaDxtiWkkX4hko4MijmyEf/DDWvstX748JT093d8FR3eA79SpU+3kWroRm6elpcXDneA97CPF6ydOnOiXd8e5LKwEq5ls7jy3yocLWITGsRQUFAzicS5KmCbodevW5SvdDkqm8jVFJplaIR0sOTnZ/2Nt2LDBQ378mImX0sMLLdMCfYPDLhW5uQ2XIJVo3cEslWipBMvD0Pr6+njE0FR5dpnYWPmaKSaXdavs9AWPPoSdTzRUnK1lBLrfe0VFRcfa29tTcCeRS2o3emyZYZ7Tz5VvqoHGDFhotT0TKZAnT57UdbF68iXB8iMyn19fWVn5BP0dRfuG60L2M5VZxNwaO+9lgZH6to4HpwgkSarg9OyvJ1+ibBWqGeJsVJ5UR2SGeQnXOTumFzRiWcw6+6qdoJEj4Y0N3bfv3r17myjMU92f4mzdaVMKITuUFaoB+4iz0w0ahkmZHmM2ztlBDQ3/he7Zsyd/6dKlTWoZOJVYukMrFKRGiM/GcnKMM1O1YBOjIAZ8n9k0NTua5GgK41ZHFFBdXT0JcbVdlMaMGeNPaBn8eidnpTnyyx3iAJg/+V3UO8zkeZXQSEDDRGqALF68OB8XOnfu3PqVK1dm4jW5hRJqXtfpaT0aaRjJISMuN9hCBNz3WIi5pt06DvQTr0lnm3mxqIAgJHXKy8vHc596GO4CeYe6ujovNaWLUeGRS2kys9cE56UowyOvMMNI+u/njFi4oGEfssDoogf17IwSWlpamskjCX8F19nZ6VOGZgTUI3UKrF27tk4ehmGb4ltk5YrQGYBc9YIFCxqUfhs/BClo1KH2vknjFP/gbJhZoOG7MJOj7ikz5V1GuFiqsM5JvhjpUakJXVtb24osnFrFh5J35syZI6gc4bdrampSBw8e/K0VUYcBu8SZ3DITNMzLD4z+xdRQLTdqIvv9qjIiQAiHtOfRo0fPkf9tDpVsxw+A1huayMgtCxJ1gMVbTOe8pMxgBZfHAhN0G54PD/liPaGboHaDBwd/DuRLRiMJTNS9MVTJjkFDCd4wUMgwozOioy2POe8fZoq5g2LYEL69wQIryzG7QMNQAaGrZgwLzDoby9bCIV8yeoBwV61AgvsHFlhB6P4YhfwN6R0W5uPNZqzD8g/pZ1I76jkWO6O8unizuoJfY1hmxRJOqzjwaLYG0nYm6BJO8mMil/08i85FyT5hgSyc0IuSyQ2ZN0wmi6l5omGZvQMskLS3JFtpx/Am9NJIC0cmCgYYlTk6Uj9nUbxwpNLQkpzOJcJSqNVctgyWitTivoUssByS3Yv7Iv+CR98aWQwv7qtm8uWqAf8BZu5y1S0c6h25XHUwC7YAewr/ERJkFVgvL6mQ0Auw/yfAAEn7b2uNKCsZAAAAAElFTkSuQmCC"/>
		</div>
	</div>
</template>
<script>
	import router from "./../router/router.js";
	import Vue from 'vue';
	import { Toast } from 'mint-ui';
	import { Swipe, SwipeItem } from 'mint-ui';
    import  ajax  from  './../md/MyAjax.js';
	
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	export default {
		data(){
			return {
				   pickerValue:"",
				   isloading:false,
				   list:[],
				   lista:[],
				   listb:[],
				   listc:[],
				   listd:[],
				   liste:[],
				   listf:[],
				   index:2,
				   first:true
				}
		},
		methods:{
			 scroll(){
                $("#container").scrollTop(0) 
			 },
			 cart(){
                router.push({path:"/cart"})
			 },
			 user(){
				router.push({path:"/user"})
			 },
			 detail1(index){
				 //9
				 var  index1=index.split("=")[1]
				  router.push({
					  path:"detail",
					  query:{
                         id:index1
					  }
				  })
			 },
			 detail2(index1){
                console.log(index1)

			 },
			 detail3(index2){
                console.log(index2)

			 },
			 detail4(index3){
                console.log(index3)

			 },
			 detail5(index4){
                console.log(index4)
                router.push({
					  path:"detail",
					  query:{
                         id:index4
					  }
				  })
			 },
			 searchgo(){
                 router.push({path:"search"})
			 }
		},
		mounted(){
			
			var  that = this;
            var  url = "http://w.lefeng.com/api/neptune/brand/ad/v3?zoneId=943%2C478%2C496%2C693%2C724%2C725%2C726%2C727%2C728&resolution=375x667&appName=lefeng_android&version=4.1.1"
			ajax.vueJson(url,function (data) {
                    // console.log(data.data)
                    that.list = data.data[478]
                    that.lista =  data.data[496]
					that.listb =  data.data[724]
					that.listc =  data.data[725]
			},function (err) {
              console.log(err)
			})
            var  url1 = "http://w.lefeng.com/api/neptune/special_brands/v3?page=1&labelType=1"
            ajax.vueJson(url1,function (data) {
                //    console.log(data.data)
				   that.listd = data.data
			},function (err) {
                   console.log(err)
			})
            var  url2 = "http://w.lefeng.com/api/neptune/handpick_list/v1?start=1"
             ajax.vueJson(url2,function (data) {
                //    console.log(data.data)
				   that.liste = data.data
			},function (err) {
                   console.log(err)
			})


$(window).bind("load", function() {
    var timeout = setTimeout(function() { $("img.lazy").trigger("sporty") }, 5000);
});
			$("#container").bind("scroll",function(e){
				 var  height = $(".header").height()
                  if($(this).scrollTop() > height){
                       $(".header").css({
							position:"fixed",
							top:"0",
							left:"0",
							"z-index":"1"
					   })
				  }else{
                       $(".header").css({
							position:"",
					   })
				  }
                  if($(this).scrollTop() > 200){
                        $(".homescroll").css("display","block")
				  }else{
                      $(".homescroll").css("display","none")
				  }
				  var  height1 = $("#loading2").height() - 500;
				  var  index1 = that.index;
                  if($(this).scrollTop() > height1 ){
					    if(that.first){
                                that.isloading = false;
								var  url1 = "http://w.lefeng.com/api/neptune/special_brands/v3?page="+index1+"&labelType=1"
								ajax.vueJson(url1,function (data) {
									that.isloading = true;
									// console.log(data.data)
									that.listf = data.data
								},function (err) {
									console.log(err)
								})
								that.first = false;
						}

				  }
			})

		}
	}
</script>

<style scoped>
	.mint-swipe{
		height: 150px;
	}
	.mint-swipe  img{
		width:100%;
		height:100%;
	}
	#licenter{
		text-align:center;
	}
</style>