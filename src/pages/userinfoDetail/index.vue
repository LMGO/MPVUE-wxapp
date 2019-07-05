<template>
  <div class="">
    <ul>
      <li class="item">
        <label class="left" >学号:</label>
        <input  class="right" :disabled="UserId" v-model="UserId" style="color:DarkCyan">
      </li>
      <li class="item">
        <label class="left">昵称:</label>
        <input  class="right" v-model="userNickname"  maxlength="12">
      </li>
      <li class="item">
        <label class="left">姓名:</label>
        <input  class="right" :disabled="UserName" v-model="UserName" style="color:DarkCyan">
      </li>
      <li class="item">
        <label class="left">性别:</label>
        <input  class="right" :disabled="Gender" v-model="Gender" style="color:DarkCyan">
      </li>
      <li class="item">
        <label class="left">学院:</label>
        <input  class="right" v-model="userAcademy">
      </li>
      <li class="item">
        <label class="left">电话:</label>
        <input  class="right"  v-model="userTelephone"  maxlength="11">
      </li>
      <li class="item">
        <label class="left">QQ:</label>
        <input  class="right" v-model="userQq"  maxlength="15">
      </li>
    </ul>
    <button @click="toSubmit">提交</button>
    <div class="login_fal" v-show="showerror" >昵称、学院、电话和QQ不能为空</div>
  </div>
</template>

<script>
export default {
  data(){
    return{ 
      UserId:'',
      userNickname:'',
      UserName:'',
      Gender:'',
      userTelephone:'',
      userQq:'',
      userAcademy:'',
      userInfo:{},
      userwxInfo:{},
      showerror:false//表单为空提示不显示
    }
},
 beforeMount() {
      let _this = this;
      //微信获取性别
        _this.userwxInfo=_this.$store.state.myWxInfo;
        _this.gender=_this.userwxInfo.gender;
        if(_this.gender==1){
          _this.Gender="男"
        }else{
          _this.Gender="女"
        }
        console.log(_this.Gender)
        //获取用户其他信息
        _this.userInfo=_this.$store.state.userInfo;
        _this.UserName=_this.userInfo.userName;
        _this.userNickname=_this.userInfo.userNickname;
        _this.userTelephone=_this.userInfo.userTelephone;
        _this.UserId=_this.userInfo.userId;
        _this.userQq=_this.userInfo.userQq;
        _this.userAcademy=_this.userInfo.userAcademy;
    },

	methods: {
      //修改资料
      
			toSubmit(){
        let _this = this;

         console.log(_this.UserId);
          console.log(_this.userNickname);
           console.log(_this.userTelephone);
            console.log(_this.userInfo.userQq);
             console.log(_this.userInfo.userAcademy);
        if(_this.userNickname==""||_this.userTelephone==""||_this.userQq==""||_this.userAcademy==""){
           this.showerror=true;
              let self=this;	
              //弹出的提示一秒后消失
              setTimeout(function(){
                self.showerror=false;
                },1000);
        }
        else {
        //修改资料
        _this.$fly.post('http://106.14.83.188:8080/admin/updateuser', _this.$qs.stringify({
        userId: _this.UserId,//不更改
        userNickname:_this.userNickname,
        userTelephone:_this.userTelephone,
        userQq:_this.userQq,
        userAcademy:_this.userAcademy
			}))
        .then(function (response) {
          console.log(response.data);
          console.log("更改成功");
          setTimeout(function(){
            // wx.navigateBack({
            //   delta: 1
            // })
            wx.showToast({
              title:'修改成功！',
              icon:'success',
              duration: 1000
            });
          },500);
       
          //更新store存储的信息
        // _this.$store.state.userInfo=_this.userInfo;
        // _this.userInfo.userName=_this.UserName;
        _this.userInfo.userNickname=_this.userNickname;
        _this.userInfo.userTelephone=_this.userTelephone;
        // _this.userInfo.userId=_this.UserId;
        _this.userInfo.userQq=_this.userQq;
        _this.userInfo.userAcademy=_this.userAcademy;

        //更新页面资料
        _this.userInfo=_this.$store.state.userInfo;
        // _this.UserName=_this.userInfo.userName;
        _this.userNickname=_this.userInfo.userNickname;
        _this.userTelephone=_this.userInfo.userTelephone;
        // _this.UserId=_this.userInfo.userId;
        _this.userQq=_this.userInfo.userQq;
        _this.userAcademy=_this.userInfo.userAcademy;

        console.log(_this.UserId);
          console.log(_this.userNickname);
           console.log(_this.userTelephone);
            console.log(_this.userQq);
             console.log(_this.userAcademy);

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
.item{
  height: 80rpx;
  background-color: #fff;
  margin: 10rpx;
  width: 80vw;
  display: flex;
  border-radius: 20rpx;
  justify-content:center;
}
.left{
  margin:10rpx;
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
}
.right{
  margin:10rpx;
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  color: rgb(63, 62, 62);
  margin-right: 20rpx;
}
button{
  color: green;
}
button:active{
    background-color: rgb(189, 248, 212);
  }
   
.login_fal{
	color: red;
}
</style>
