<template>
<div class="container ub-ver"> 
		
	<div v-if="isShow">
		<!--- 用户信息--->
		<div class="user">
			<img class="user-img" :src="userInfo.avatarUrl">
		</div>
		<!---登录---> 
		<form class="login-from"> 	
			<div class="inputView"> 
				<label class="loginLab">学号</label> 
				<input class="inputText" placeholder="请输入学号"  type="number" maxlength="11" v-model= "formData.userId"/> 
			</div> 			
			<div class="line"></div> 			
			<div class="inputView">
				<label class="loginLab">密码</label> 
				<input class="inputText" password="true" placeholder="请输入密码" maxlength="15" v-model= "formData.password"/> 
			</div> 		
			<button  class="loginBtn"  @click="login" formType="submit">登录</button>
			<div class="login_fal" v-show="show1" >学号和密码都不可为空</div> 
			<div class="login_fal" v-show="show2" >学号或密码错误</div> 
		</form>  
	</div>
	<div class="container ub-ver" v-if="show">
		<div>欢迎来到指尖云大</div>
		<Button class="loginBtn"  open-type="getUserInfo" @getuserinfo="getUserInfo">点击授权</Button>
	</div>
</div>
</template>

<script>
 export default {
	data(){
		return{
			result:[],
			userInfo: {},
			isShow:false,//未授权
			formData:{
				userId: '',
				password: ''
			},
			show:true,
			show1:false, //隐藏状态
			show2:false, //隐藏状态
		}
	},
	beforeMount(){
		// wx.getUserInfo({
		// 	success:(data) => {
		// 		console.log(data);
		// 		this.userInfo = data.userInfo
		// 	  },
		// 	fail:() => {
		// 		console.log('获取失败');
		// 	}
		// 	})
	 this.handleGetUerInfo()
	},
	mounted () {
      
  },
	methods: {
		
		//获取用户信息部分
		handleGetUerInfo(){
			wx.getSetting({
				success (res) {
					console.log(res.authSetting);
					// console.log('已经授权');
				}
				}),
			wx.getUserInfo({
			  success:(data) => {
				// console.log(data);
				this.userInfo = data.userInfo;
				this.$store.dispatch('getMyWxInfo', data.userInfo);
				this.$store.state.myWxInfo=this.userInfo;
				console.log(this.$store.state.myWxInfo);
				console.log('用户头像信息保存成功');
				console.log(this.$store.state.myWxInfo.avatarUrl)
				this.isShow = true;
				this.show = false;
			  },
			fail:() => {
				console.log('获取失败');
			}
			})
		},
		getUserInfo(data){
			if(data.mp.detail.rawData){
				//用户授权
				this.handleGetUerInfo()
			}
		},
		login(){
			//  wx.switchTab({url:'/pages/index/main' });
			let _this = this;
        if(this.formData.userId==""||this.formData.password==""){
            this.show1=true;
			let self=this;	
			//弹出的提示一秒后消失
			setTimeout(function(){
				self.show1=false;
				},1000);
        }
		else{
			_this.$fly.get('http://106.14.83.188:8080/admin/getuserbyid', _this.$qs.stringify({
				userId: _this.formData.userId,
				userPassword: _this.formData.password,
			}))
			.then(function (response) {
				console.log(response);
				console.log("成功");
					_this.$fly.post('http://106.14.83.188:8080/admin/getuserhead', _this.$qs.stringify({
						userId: _this.formData.userId,
						userHead:_this.userInfo.avatarUrl
				}))
				.then(function (response) {
					console.log(response);
					console.log("成功");
				})
				.catch(function (error) {
				console.log(error);
				});
				_this.result=response.data.user;
				// console.log(response.data.user.userId);
				// console.log(_this.result.userId);
				if(response.data.user==null){
					_this.show2=true;
					let self=_this;	
					//弹出的提示一秒后消失
					setTimeout(function(){
					self.show2=false;
					},1000);
				 }
				 else{
					 setTimeout(function(){
           				 wx.showToast({
             		 		title:'登录成功！',
              				icon:'success',
              				duration: 1000
            				})
          				},500)
					_this.$store.dispatch('getUserInfo', response.data.user);
					console.log(_this.$store.state.userInfo);
                    console.log("将服务器返回的资料赋值给_this.$store.state.userInfo成功！");
					 wx.switchTab({url:'/pages/index/main' });
				 }
			})
			.catch(function (error) {
				console.log(error);
			});
		}	
		},		 
  } 
    
 };
</script>

<style scoped>
.container { 
	height:100%;
	display: flex; 
 	flex-direction: column; 
	align-items:center;
	text-align:center;   
} 
.user{
	margin-top: 15%;
	margin-bottom: 50rpx;
}
/*logo*/
.user-img{ 
	width: 200rpx; 
	height: 200rpx;
	border-radius: 100rpx;
} 
/*表单内容*/
.login-from {  
	flex: auto; 
	height:100%; 
} 
  
.inputView { 
	line-height: 80rpx;
	height: 8vh; 
	} 
/*输入框*/
.loginLab { 
	margin: 15rpx 15rpx 15rpx 10rpx; 
	color: #545454; 
	font-size: 30rpx
} 
.inputText { 
	flex: block; 
	float: right; 
	text-align: center; 
	margin-right: 22rpx; 
	margin-top: 20rpx; 
	color:black; 
	font-size: 25rpx;
	background-color: #93f7a3;
	border: #0a0a0ae5;
	height: 50rpx;
	width: 400rpx;
	border-radius: 100rpx;
} 
  
.line { 
	width: 100%; 
	height: 1px; 
	background-color: #cccccc; 
	margin-top: 1px; 
} 
/*按钮*/
.loginBtn { 
	width: 80%;
	color: green; 
	border-radius: 25rpx;
	margin-top: 20rpx;
}
.loginBtn:active{
    background-color: rgb(189, 248, 212);
  }
  
.login_fal{
	color: red;
}
</style>
