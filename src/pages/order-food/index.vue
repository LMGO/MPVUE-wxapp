<template>
    <div class="container">
      <div class="top">
        <label>共 6个商家</label>
      </div>
      <div class="shoplist">
          <div class="shopitem" v-for="(item,index) in 6" :key="index">
            <div class="imgbox"><img src="../../../static/images/wxj.jpg" alt=""></div>
            <div class="shopname">百逸维多</div>
            <div class="shopclass">饮品、小吃</div>
            <button @click="toshop()">查看</button>
          </div>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods:{
    //点击查看跳转商家
    toshop(){
       wx.navigateTo({url:"../../pages/menu/main"});
    }
  }
}
</script>
<style scoped>
  .container{
    width:100%;
    background:#fff;
    position:relative;
  }
  .top label{
    background-color: #fe6766;
    display:block;
    height:40rpx; 
    position:absolute;
    right:40rpx;
    font-size:28rpx;
    color:#000;
    line-height:40rpx;
     padding:6rpx;
    text-decoration: underline;
  }
  .shoplist{
    width:670rpx;
    margin:60rpx auto;
    display:flex;
    flex-wrap: wrap;
  }
  .shopitem{
    width:330rpx;
    height:400rpx;
    display:flex;
    flex-direction: column;
    align-items: center;
  }
  .shopitem .imgbox{
    width:300rpx;
    height:200rpx;
    background:#d5e0f2;
  }
  .shopitem .imgbox img{
    display:block;
    width:260rpx;
    height:150rpx;
    margin:25rpx auto;
    border:1px solid #fff;
    border-radius: 10rpx;
  }
  .shopitem .shopname{
    font-size:32rpx;
    color:#000;
    line-height:60rpx;
    margin-top:10rpx;
  }
  .shopitem .shopclass{
    font-size:28rpx;
    color:#808080;
    line-height:40rpx;
  }
  .shopitem button{
    width:180rpx;
    height:60rpx;
    border-radius: 10rpx;
    background:#fe6766;
    border:none!important;
    /* outline:none!important; */
    outline:#fe6766;
    font-size:28rpx;
    color:#fff;
    line-height:60rpx;
    margin-top:6rpx;
  }
</style>

