<template>
  <div class="container">
    <div class="c">
      <p>如果你有问题需要反馈或者想了解更多，欢迎点击拨打下方客服热线或发送邮件：</p>
      <h1 @click.stop="clickCall()">客服热线：<span>18412345678</span></h1>
      <h1>邮箱地址：<span>506986879@qq.com</span></h1>
    </div>
    
    
  </div>
</template>

<script>


export default {
  methods: {
  clickCall() {
      wx.showActionSheet({
        itemList: ['客服电话：18412345678'],
        success(res) {
          switch(res.tapIndex) {
            case 0:
              wx.makePhoneCall({phoneNumber: '18412345678'})
              break
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.container{ 
  padding-top: 15rpx;
  padding-bottom: 0;
  height: 100vh;
  width: 100%;
  background: #dcf8de;
  }
.c{ 
  margin:20rpx 0 ;
  height: 20vh;
  width: 100%;
  background: #dcf8de;
  }
  p{
    text-indent:2em;
    font-size: 40rpx;
  }
  h1{
  text-indent:2em;
  margin-top: 5vh;
  }
  span{
    color: red;
  }
</style>
