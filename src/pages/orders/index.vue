<template>
    <div class="container">
      <div class="nav">
        <div class="navlist">
          <div
            :class="{'selected':tab === 1,'testTitle':true}"
            @click="changTab(1)"
          >餐车</div>
          <div
            :class="{'selected':tab === 2,'testTitle':true}"
            @click="changTab(2)"
          >消费记录</div>
          
        </div>
      </div>  
      <div class="pagecontent">
        <!-- 餐车 -->
        <div v-if="tab===1" class="part cart">
          <!-- //商品代取列表 -->
            <div class="waitgetted">
              <div class="orderitem" v-for="(item,idx) in 3" :key="idx">
                <div class="orderlt">
                  <img src="../../../static/images/nc.jpeg" alt="">
                </div>
                <div class="ordermid">
                  <span>百逸维多饮品店 > </span>
                  <span>10分钟前</span>
                  <span>珍珠奶茶 等 2 件商品</span>
                </div>
                <div class="orderrt">
                  <span>商品代取中</span>
                  <span>取单号：20</span>
                  <span>￥28:99</span>
                </div>
            </div>
            </div>
            <!-- 订单完成列表 -->
            <div class="succeed">
              <div class="orderitem">
                  <div class="orderlt">
                    <img src="../../../static/images/zznc.jpg" alt="">
                  </div>
                  <div class="ordermid">
                    <span>百逸维多饮品店 > </span>
                    <span>10分钟前</span>
                    <span>咖啡 等 3 件商品</span>
                  </div>
                  <div class="orderrt">
                    <span>订单已完成</span>
                    <span>取单号：31</span>
                    <span class="buyagain" @click="buyagain()">再来一单</span>
                  </div>
              </div>
            </div>
            
        </div>
        <!-- 消费记录 -->
        <div v-else-if="tab===2" class="part record">
          <!-- //日期循环 -->
          <div class="recordlist" v-for="(item,index_d) in 3" :key="index_d">
            <div class="date">
              6月21日
            </div>
            <!-- 每日消费记录列表循环 -->
            <div class="recorditem" v-for="(item,index_r) in 3" :key="index_r">
              <div class="shopname">蜜雪冰城</div>
              <div class="show">
                <img src="../../../static/images/arrow.png" alt="">
              </div>
              <div class="money">
                -26元
              </div>
            </div>
          </div>
            <!-- 我最爱吃 -->
            <div class="myprefer">
              <div class="predertop">
                <div class="ptitl">
                  我最爱吃
                </div>
                <div class="presum">
                  共18个商品
                </div>
              </div>
                <!-- 爱吃列表 -->
                <div class="myprelist">
                  <div class="mypreitem" v-for="(item,index_pre) in 13" :key="index_pre">
                    <img src="../../../static/images/wxj.jpg" alt="">
                    <span>瓦香鸡</span>
                    <span>吃过 10 次</span>
                  </div>
                </div>
              
            </div>
          


        </div>

      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tab: 1
    };
  },
  methods: {
    changTab(index) {
      this.tab = index;
    },
    //再来一单
    buyagain(){

    }
  }
}
</script>
<style scoped>
  .navlist{
    width:100%;
    height:100rpx;
    display:flex;
    align-items:center;
    border-bottom:1rpx solid #ccc;
  }
  .navlist div{
    width:50%;
    height:50rpx;
    font-size:28rpx;
    line-height:50rpx;
    color:#000;
    text-align:center;
  }
  .navlist div:nth-of-type(2){
    border-left:2px solid #00baad;
  }
  .selected {
      color: #00baad;
      font-weight: 600;
  }
  .part{
    width:100%;
  }
  .orderitem{
    width:100%;
    height:200rpx;
    display:flex;
    align-items:center;
    margin-top:40rpx;
    border-bottom:1rpx solid #ccc;
  }
  .waitgetted{
    border-bottom:6rpx solid #00baad;
  }
  .orderlt img{
    width:160rpx;
    height:160rpx;
    border:1rpx solid #ccc;
    border-radius:10rpx;
    margin-left:30rpx;
  }
  .ordermid{
    width:400rpx;
    height:200rpx;
    margin-left:40rpx;
  }
  .ordermid span{
    display:block;
  }
  .ordermid span:nth-of-type(1){
    color:#333333;
    font-size:28rpx;
  }
  .ordermid span:nth-of-type(2){
    color:#8c8c8c;
    font-size:24rpx;
    margin-top:20rpx;
  }
  .ordermid span:nth-of-type(3){
    color:#505050;
    font-size:28rpx;
    margin-top:20rpx;
  }
  .orderrt{
    width:200rpx;
    height:200rpx;
    font-size:28rpx;
    color:#000;
  }
  .orderrt span{
    display:block;
  }
  .orderrt span:nth-of-type(1){
    color:#333333;
    font-size:28rpx;
  }
  .orderrt span:nth-of-type(2){
    color:#00baad;
    font-size:24rpx;
    margin-top:20rpx;
    font-weight:600;
  }
  .orderrt span:nth-of-type(3){
    color:#505050;
    font-size:28rpx;
    margin-top:20rpx;
  }
  .succeed .buyagain{
    width:160rpx;
    height:60rpx;
    background:#959595;
    color:#fff!important;
    font-size:28rpx;
    margin-top:20rpx;
    text-align:center;
    line-height:60rpx;
  }
  /* 消费记录 */
  .recordlist{
    margin-top:40rpx;

  }
  .recordlist .date{
    width:130rpx;
    height:44rpx;
    color:#000;
    line-height:44rpx;
    text-align:center;
    font-size:28rpx;
    background:#00baad;
    margin-left:40rpx;
  }
  .recordlist .recorditem{
    height:100rpx;
    display:flex;
    align-items:center;
    border-bottom:1rpx solid #ccc;
    padding:0 40rpx;
  }
  .recorditem img{
    width:24rpx;
    height:24rpx;
    display:block;
    margin-left:40rpx;
  }
  .money{
    position:absolute;
    right:40rpx;
  }
  .myprefer{
    width:100%;
    margin-top:60rpx;
  }
  .myprefer .predertop{
    width:670rpx;
    height:100rpx;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding-left:40rpx;
  }
  .myprefer .predertop div{
    height:30rpx;
    font-size:32rpx;
    color:#000;
  }
  .myprelist{
    width:96%;
    margin:10rpx auto;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
  .myprelist .mypreitem{
    width:180rpx;
    height:280rpx;
    display:flex;
    flex-direction: column;
    align-items:center;

  }
  .myprelist .mypreitem img{
    display:block;
    width:160rpx;
    height:160rpx;
    margin-top:10rpx;
    border:1rpx solid #ccc;
  }
  .myprelist .mypreitem span{
    display:block;
  }
  .myprelist .mypreitem span:nth-of-type(1){
    color:#505050;
    font-size:28rpx;
    margin-top:14rpx;
  }
  .myprelist .mypreitem span:nth-of-type(2){
    color:#999999;
    font-size:22rpx;
  }
  
</style>