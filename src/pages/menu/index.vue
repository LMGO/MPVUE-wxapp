<template>
    <div class="container">
      <div class="select">
        <img src="../../../static/images/select.png" alt=""><label for="">筛选</label>
      </div>
      <div class="menulist">
          <div class="menuitem" v-for="(mitem, i) in 4" :key="i">
            <div class="menult">
              <img src="../../../static/images/xhs.jpg" alt="">
            </div>
            <div class="menumid">
              <div class="midtop">
                西红柿炒鸡蛋
              </div>
              <div class="midbtm">
                <div class="star">
                  <img src="../../../static/images/hot.png" alt="星星" v-for="(item,index) in 3" :key="index" />
                </div> 
                <div class="score">4.9</div>
                <div class="amount">月售188单</div>
              </div>
            </div>
            <div class="midrt">
                <label for="" @click="del">-</label> 
                <span>{{number}}</span>
                <label for="" @click="add">+</label> 
              </div>
          </div>
          <button class="btn-order" @click="toOrder()">下单</button>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      number: 0
    }
  },
  methods:{
    //点击添加
    add:function(){
      this.number ++;
    },
     //点击减少
     del:function(){
       if(this.number > 0){
        this.number --;
       }
     },
    //去下单
    toOrder:function(){
      
    }
   
  }
}
</script>
<style scoped>
  .contanier{
    width:100%;
    background:#fff;
    position:relative;
  }
  .select{
    height:100rpx;
    color:#000;
    font-weight:400;
    font-size:32rpx;
    margin-left:40rpx;
    display:flex;
    align-items:center;
    border-bottom:1rpx solid #ccc;
  }
  .select img{
    width:50rpx;
    height:34rpx;
    margin-right:10rpx;
  }
  .menulist .menuitem{
    width:710rpx;
    height:180rpx;
    margin-top:10rpx;
    margin-left:40rpx;
    display:flex;
    flex-wrap: nowrap;
    align-items:center;
    border-bottom:1rpx solid #ccc;
  }
  .menuitem .menult img{
    width:120rpx;
    height:120rpx;
    border:1px solid #ccc;
    border-radius: 10rpx;
  }
  .menuitem .menumid{
    width:360rpx;
    height:140rpx;
    margin-left:30rpx;
  }
  .menumid .midbtm{
    display:flex;
    height:50rpx;
    margin-top:20rpx;
    align-items:center;
  }
 .star img{
    width:20rpx;
    height:20rpx;
    display:inline-block;
    margin-left:6rpx;
    padding-bottom:6rpx;
  }
  .menumid .score{
    font-size:28rpx;
    color:#333333;
    line-height:50rpx;
    margin-left:40rpx;
    color:#fe6766;
  }
  .menumid .amount{
    font-size:24rpx;
    color:#333333;
    line-height:50rpx;
    margin-left:20rpx;
  }
  .midrt{
    width:200rpx;
    height:120rpx;
    display:flex;
    align-items:center;

  }
  .midrt label{
    display:block;
    width:48rpx;
    height:48rpx;
    background:#00baad;
    border-radius:50%;
    color:#fff;
    font-size:40rpx;
    font-weight:600;
    line-height:42rpx;
    text-align:center;
  }
  .midrt span{
    display:block;
    width:44rpx;
    height:44rpx;
    text-align:center;
    line-height:44rpx;
    margin:2rpx;
    border:1rpx solid #00baad;
  }
  .btn-order{
    width:180rpx;
    height:60rpx;
    border-radius: 10rpx;
    background:#00baad;
    border:none!important;
    outline:none!important;
    font-size:28rpx;
    color:#fff;
    line-height:60rpx;
    margin-top:40rpx;
    margin-bottom:40rpx;
  }
</style>

