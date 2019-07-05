<template>
  <div class="ub-box z-box-sizing-border ub-col">
    <!---用户头像及学号昵称--->
    <div class="ub-box ub-ver header-c">
      <img :src="userInfo.userHead" alt="">
      <div class="info-c">
        <span class="uer.name">{{userInfo.userNickname}}</span>
        <span class="uer.phone">{{userInfo.userId}}</span>
      </div>
    </div>
      <!---个人资料、我的发布等--->
    <div class="list-c">
      <div class="item" v-for="(item, index) in itemList" :key="index" :data-index="index" @click="itemClick(item)">
        <div class="item-l">
          <image class="icon" :src="item.icon"></image>
          <span class="title">{{item.title}}</span>
        </div>
        <!--右边小箭头-->
        <i class='iconfont icon-arrow-right'></i>
      </div>
    </div>
    <div class="btn" @click="logoutClick">退出账号</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {},
      itemList: [
        {
          title: '个人资料',
          icon: '../../static/icon/myinfo.png',
          path: '/pages/userinfoDetail/main'
        },
        {
          title: '密码设置',
          icon: '../../static/icon/password.png',
          path: '/pages/passwordSetting/main'
        },
        {
          title: '我的发布',
          icon: '../../static/icon/mypub.png',
          path: '/pages/mypublish/main'
        },
        {
          title: '关于我们',
          icon: '../../static/icon/aboutus.png',
          path: '/pages/aboutUs/main'
        },
        {
          title: '联系我们',
          icon: '../../static/icon/servicehot.png',
          path: '/pages/contactUs/main'
        }
        ]
    }
  },
  beforeMount(){
    let _this=this;
    console.log(_this.$store.state.myWxInfo),
     _this.userInfo=_this.$store.state.userInfo;
  },
  methods: {
    itemClick(e) {
      wx.navigateTo({url: e.path});
    },
    goTo() {
          wx.navigateTo({url:'/pages/login/main'});
       },
    logoutClick() {
      wx.showModal({
          title: '确认退出？',
          content: '退出登录后将需要重新登录！',
          confirmColor: '#FFC24A',
          success: function(res) {
            if (res.confirm) {
              wx.navigateTo({url:'/pages/login/main'})
            } else if (res.cancel) {
            }
        }
      })
    }
  }
}
</script>

<style scoped>
.container{ width:100%; height:100%;display: flex;background-color: #f4f4f4;}
.header-c{display: flex;align-items: center;height: 30vh;background-color: #b2f5bd}
img{width: 120rpx;height: 120rpx;border-radius: 60rpx;margin-left: 30rpx}
span {font-size: 20rpx;color:#333;margin-top: 10rpx;}
.info-c{display: flex;flex-direction: column;margin-left: 30rpx}
.uer.name{font-size: 32rpx;color: Black;font-weight: bold;float: left; margin-top: 15px;width: 60%;}
.uer.phone{font-size: 32rpx;color:Black;font-weight: bold;float: left; margin-top: 15px;width: 60%;}
.list-c {display: flex;flex-direction: column;margin-top: 20rpx;background-color: white}
.item {display: flex;align-items: center;height: 88rpx;border-bottom: 2rpx solid #e4e4e4;padding: 0 20rpx}
.item-l {display: flex;flex: 1;}
i {font-size: 28rpx;margin-top: 6rpx;}
.icon{margin-top: 10rpx;margin-left: 15rpx;height: 28rpx;width: 28rpx;}
.title {font-size: 28rpx;color:#333;margin-left: 30rpx;margin-top: 6rpx;}
i {font-size: 24rpx;color: #333}
.item:last-child {border-bottom: 0rpx solid #e4e4e4}
.btn {display: flex;align-items: center;justify-content: center;height: 88rpx;background-color: white;margin-top: 20rpx;color:  #333;font-size: 28rpx;background-color: rgb(252, 54, 27)}
</style>
