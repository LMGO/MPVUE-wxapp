<template>
<div class=“container”>
    <form class=""  @submit="onSubmitForm"> 
			<div class="inputView"> 
				<label >旧密码:</label> 
				<input class="inputText" placeholder="请输入旧密码" type="number" maxlength="15" v-model= "formData.old"/> 				
			</div> 						
			<div class="inputView">
				<label >新密码:</label> 
				<input class="inputText" placeholder="请输入新密码" type="number" maxlength="15" v-model= "formData.newOne" /> 
			</div>	
      <div class="inputView">
				<label >确认新密码:</label> 
				<input class="inputText" placeholder="请再次输入新密码" type="number" maxlength="15" v-model= "formData.newTwo" /> 
			</div>    			
			<button  :disabled="disabledSubmitBtn" formType="submit" @click="changePassword">确认修改</button> 
			<div class="login_fal" v-show="show1" >所有密码都不可为空</div>
			<div class="login_fal" v-show="show2" >两次输入的新密码不一致</div>
			<div class="login_fal" v-show="show3" >旧密码错误</div>
			<div class="login_fal" v-show="show4" >新密码不能和旧密码一致</div>
			<div class="login_fal" v-show="show5" >密码长度为6-15！</div>
		</form> 
  </div>
</template>

<script>
export default {
  	data(){
		return{
			result1:[],
		formData:{
			old: '',
      		newOne: '',
      		newTwo: ''
			},
			oldPassword:'',
			show1:false, //隐藏状态
			show2:false, //隐藏状态
			show3:false,//隐藏状态
			show4:false,//隐藏状态
			show5:false,//隐藏状态
		}
	},
   beforeMount(){
    let _this = this;
    //   //获取用户密码
    //   this.$fly.get('',({})
    //   )
    //   .then(function (response) {
    //     console.log(response.data);
    //     console.log("获取用户密码成功");
   console.log(_this.$store.state.userInfo.userPassword);
      console.log(_this.$store.state.userInfo.userId);
			this.oldPassword= _this.$store.state.userInfo.userPassword;
      console.log("将返回的资料赋值给oldPassword成功！");     
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
	},
	mounted () {
		 let _this = this;
		_this.formData.old="";
		_this.formData.newOne="";
		_this.formData.newTwo=""
  },
    methods: {
	
		changePassword (){
		let _this = this;
		 
        if(_this.formData.old==""||_this.formData.newOne==""||_this.formData.newTwo==""){
            this.show1=true;
			let self=this;	
			//弹出的提示一秒后消失
			setTimeout(function(){
				self.show1=false;
				},1000);
		}else if(_this.formData.old!=_this.oldPassword){
			 this.show3=true;
			let self=this;	
			//弹出的提示一秒后消失
			setTimeout(function(){
				self.show3=false;
				},1000);
		}else if(_this.formData.newOne==_this.oldPassword){
			 this.show4=true;
			let self=this;	
			//弹出的提示一秒后消失
			setTimeout(function(){
				self.show4=false;
				},1000);
	
        }else if(_this.formData.newOne!=_this.formData.newTwo){
			 this.show2=true;
			let self=this;	
			//弹出的提示一秒后消失
			setTimeout(function(){
				self.show2=false;
				},1000);
		}
		else if(_this.formData.newOne.length>15||_this.formData.newOne.length<6||_this.formData.newTwo.length>15||_this.formData.newTwo.length<6){
			 this.show5=true;
			let self=this;	
			//弹出的提示一秒后消失
			setTimeout(function(){
				self.show5=false;
				},1000);
		}
		else{
		//修改密码
		console.log(_this.$store.state.userInfo.userId);
		 console.log(_this.formData.newOne);
        _this.$fly.post('http://106.14.83.188:8080/admin/updatepassword', _this.$qs.stringify({
            userId: _this.$store.state.userInfo.userId,
            // userNickName: _this.userInfo.userNickName,
            // userName:_this.userInfo.useName,
            userPassword:_this.formData.newOne
            // userSex: _this.userInfo.sex,
            // userPhone:_this.userInfo.userPhone,
            // college:_this.userInfo.college,
          }))
		
        .then(function (response) {
		  console.log(response);
		  	_this.result1=response.data.success;
		   console.log(_this.result1);
			//清空表单
		   _this.formData.newOne="";
		   _this.formData.old="";
		   _this.formData.newTwo=="";

		  
		  setTimeout(function(){
            wx.navigateBack({
              delta: 1
            })
            wx.showToast({
              title:'修改成功！',
              icon:'success',
              duration: 1000
            });
          },500);
        })
        .catch(function (error) {
           console.log(error);
           setTimeout(function(){
             wx.showToast({
               title: '修改失败！',
               icon: 'fail',
               duration: 1000
            });
          },500);
        })
		}
		}
			
		
    }
}
</script>

<style scoped>

.container { 
	height:100vh;
	display: flex; 
 	flex-direction: column; 
	align-items:center;
	text-align:center;
  	/* background: #dcf8de;  */
} 
/*输入框*/
.loginLab { 
	margin: 15rpx 15rpx 15rpx 10rpx; 
	color: #545454; 
	font-size: 30rpx
} 
.inputView { 
  margin: 10rpx 0;
	line-height: 80rpx;
	height: 80rpx; 
	} 
.inputText { 
	flex: block; 
	float: right; 
	text-align: center; 
	margin:10rpx 22rpx 10rpx 0; 
	color:black; 
	font-size: 25rpx;
	background-color: #fdfdfd; 
	height: 50rpx;
	width: 400rpx;
	border-radius: 100rpx;
  border-color: rgb(129, 128, 128);
  border-style:solid;
} 
   
/*按钮*/
button { 
	width: 80%;
	color: green; 
	border-radius: 25rpx;
	margin-top: 20rpx;
}
button:active{
    background-color: rgb(189, 248, 212);
  }
  
.login_fal{
	color: red;
}
</style>
