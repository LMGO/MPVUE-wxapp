<template>
 <div class="ub-box ub-col">
   <!--日期、搜索框和提醒事件-->
    <dl class="ub-box ub-ver z-padding-v-10-px" style="background:#fff;width:100%;height:5vh">
      <dd class="z-padding-h-10-px ub-box ub-ver">
        <span class="z-font-size-16 z-margin-left-3-px" style="font-size: 16px;" id="time">{{week}}.</span>
      </dd>
      <dd class="ub-flex-1 ub-box ub-ver">
        <div class="search ub-box ub-ver-v z-width-90-percent z-box-sizing-border">
          <i class="iconfont icon-sousuo z-color-666 z-font-size-16 z-margin-right-3-px"></i>
          <input class="z-font-size-14 z-color-999 z-margin-left-8-px" placeholder="蜜雪冰城..."> 
        </div>
      </dd>
       <!--提醒事件-->
      <dd class="z-padding-h-10-px ub-box ub-ver">
        <i class="iconfont icon-tixing z-font-size-16 z-padding-right-7-px" style="font-size: 16px;"></i>
      </dd>
    </dl>
    <scroll-view scroll-y style="height: calc(100vh - 50px);" scroll-top="0">
      <!--轮播图-->
      <div class="ub-box ub-ver z-bg-color-fff">
        <swiper class="swiper" indicator-dots="false" circular="true" autoplay="false" interval="5000" duration="500">
          <block v-for="(item, idx) in imgUrls" :key="idx">
            <swiper-item>
              <image :src="item" class="z-width-100-percent" mode="widthFix"/>
            </swiper-item>
          </block>
        </swiper>
      </div>
      <!--图标四个功能入口-->
      <dl class="ub-around ub-box ub-ver-h z-padding-v-5-px z-border-bottom-1-grey" style="background:#fff">
        <div  class="icon-item ub-box ub-col ub-ver" :key="key" v-for="(idx, key) in iconMap">
          <dd @click="goTo(iconMap[key]['path'])" class="icon ub-box ub-ver iconfont" :class="key" :style="{background: iconMap[key]['bk']}"></dd>
          <span class="z-padding-v-8-px z-font-size-12 z-color-333">{{iconMap[key]['title']}}</span> 
        </div>
      </dl>
      <!--热搜-->
      <dl class="ub-box ub-col z-margin-top-5-px z-padding-all-5-px" style="background:#fff；height:8vh;">
        <p class="z-width-100-percent ub-box ub-ver" style="border-bottom:1px solid #eee">
          <i class="iconfont icon-renqi z-font-size-16 z-padding-right-7-px" style="font-size: 16px;color:red;"></i>
          <span class="z-font-size-12 z-color-888 z-lineHeight-18">微空间点赞榜</span>
        </p>
        <dd class="ub-box ub-col">
          <div class="userpub" > 
              <ul>
                <li v-for="(pub,index) in hotpub" :key="index" wx:for-index="hello" class="userpub-li">
                <!-- <li  class="userpub-li">  -->
                <div class="user">
                  <img :src="pub.userHead" class="user-header"/>                        
                  <!-- <img class="user-header" :src="userInfo.userHead"> -->
                  <div class="name-time">
                    <div class="name">{{pub.userNickname}}</div>
                    <!-- <div class="name">沐雙惜</div> -->
                    <!-- <button class="del" @click="dele()">删除</button> -->
                    <div class="time">{{pub.microTime}}</div>
                    <!-- <div class="time">2019-6-15</div> -->
                  </div>
                </div> 
                <div class="content">
                  <p class="content-1">{{pub.microDes}}</p> 
                  <!-- <p class="content-1">菜鸟，哈哈哈哈哈哈哈哈,哈哈哈哈哈哈哈哈哈哈哈哈哈</p>  -->
                </div>
                <div class="imag">
                  <!-- <img v-for="(image,index1) in pub.images" :key="index1" class="image" @click="previewImg_new(index,index1)" :src="image"/>  -->
                  <img class="imge" src="/static/images/user.png" alt="">
                  <img class="imge" src="/static/images/user.png" alt="">
                  <img class="imge" src="/static/images/user.png" alt="">
                </div> 
                <!-----评论和点赞----->
                <div class="icons">
                <!-----评论---->
                  <div class="talk">
                    <img class="" src="/static/icon/talk.png"  @click="totalk(index)">
                    <span>{{pub.microComm}}</span>
                  </div>
                  <!----点赞---->
                  <div class="like">
                    <img :src="pub.islike" @click="toLike1(index)">
                    <!-- <img src="/static/icon/like.png" @click="toLike1(index)"> -->
                    <span>{{pub.microUp}}</span>
                    <!-- <span>5</span> -->
                  </div>
                </div>
                <div class="comment">
                    <ul class="comment-ul">
                      <li class="comment-li" v-for="(comment, index2) in pub.wecomment" :key="index2">
                        <!-- <li class="comment-li"> -->
                        <span class="username">{{comment.userNickname}}:</span>
                        <!-- <span class="username">沐雙惜：</span> -->
                        <span class="content">{{comment.wecommentContent}}</span>
                        <!-- <span class="content">哈哈哈，好难啊</span> -->
                      </li>
                    </ul>
                    <!-- 评论框 -->
                    <div class="coment" v-show="talk">
                      <textarea autofocus="autofocus" rows="6" v-model="comment_content" maxlength="200"></textarea>
                      <button @click="toPublish()">发表</button>
                      <button @click="quxiao()">取消</button>
                    </div>
                  </div>
                </li>
              </ul>
          </div>
        </dd>
      </dl>
    </scroll-view>
  </div>
</template>

<script>
import moment from "moment";
export default {
    data () {
      return {
        week:'',
        imgUrls: [
          'http://attach.bbs.miui.com/forum/201306/04/204332viqg4p2lg1kh2h2i.jpg',
          'http://img.zcool.cn/community/0132eb58569c51a8012060c8c92a03.jpg@900w_1l_2o_100sh.jpg',
          'http://www.jjc.ynu.edu.cn/__local/E/15/6F/E1F8F13DCA4EA9988DAD62EE0A4_75922BCC_18560.jpg'
        ],
        iconMap: {
          'icon-gaoxiaoquan': {title: '校园空间', bk: '#8B67E5', path: "/pages/campus-space/main"},
          'icon-dd-market-g': {title: '自由市场', bk: '#5DC7B0',path: "/pages/free-market/main"},
          'icon-diancan': {title: '校内订餐', bk: '#F3AE42',path: "/pages/order-food/main"},
          'icon-xunwuqishi': {title: '寻物之家', bk: '#5CA2F2',path: "/pages/find-things/main"}
        },

        index: 0,
        userId:'',
        userwxInfo: {},
        userInfo: {},
        userNickName:'',
        hotpub:[],
        comment_content: '',
        icon_like: "../../static/icon/like.png",
        talk: false,
        myup:[]





      }
    },
   onShow(){
     let _this=this;
      _this.getPosts();
    },
    beforeMount(){
        let _this=this;
        // _this.getPosts();
        _this.userwxInfo=_this.$store.state.myWxInfo;
        _this.userInfo=_this.$store.state.userInfo;
      },
    mounted() {
      this.LopTime();        //在生命周期中调用LopTime（）方法
   },
    props: [''],
    computed: {},
    methods: {
      getTime(){
        let week = [        //把一周七天用数组的形式方便获取时间索引
          'Sun',
          'Mon',
          'Tue',
          'Wed',
          'Tur',
          'Fri',
          'Sat'
        ]
        this.week = week[moment().format("d")]        //因为需求要展示的是中文的星期几，所以这里对week进行了处理，加了个索引
        // console.log(this.week)
      },
      LopTime(){
        setInterval(this.getTime,1000)   //对获取的时间，用定时器让它动起来，定时器中调用getTime方法，注意不能加（），调用函数
      },
      goTo(e) {
          wx.navigateTo({url: e});
        },
         //预览图片
      previewImg_new(i,j){
        wx.previewImage({
          current: this.hotpub[i].images[j],
          urls: this.hotpub[i].images
        });
      },
      //点赞
      toLike1(i){
        let _this = this;
         if(_this.hotpub[i].islike == "../../static/icon/like.png"){
          // 点赞
          _this.$fly.post('http://106.14.83.188:8080/admin/upwespace',_this.$qs.stringify({
              userId: _this.$store.state.userInfo.userId,
              microId: _this.hotpub[i].microId,
            })
          )
          .then(function (response) {
            console.log(response);
            console.log("点赞成功！");
            
          })
          .catch(function (error) {
            console.log(error);
          });
          _this.hotpub[i].islike = "../../static/icon/like-active.png";
          _this.hotpub[i].microUp += 1;
        }
        else{
          // 取消点赞
            console.log(_this.hotpub[i].microId);
          _this.$fly.post('http://106.14.83.188:8080/admin/downwespace',_this.$qs.stringify({
              userId: _this.$store.state.userInfo.userId,
              microId: _this.hotpub[i].microId,
            })
          )
          .then(function (response) {
            console.log(response);
            console.log("取消点赞！");
              
          })
          .catch(function (error) {
            console.log(error);
          });
          _this.hotpub[i].islike = "../../static/icon/like.png";
          _this.hotpub[i].microUp -= 1;
        }
      },
      // 点击评论图标弹出发表框
      totalk(i){
        this.index = i;
        this.talk = !this.talk;
      },
      //取消评论
      quxiao(){
        this.comment_content="";
        this.talk = !this.talk;
      },
      // 发表评论
      toPublish(){
        let _this = this;
        _this.$fly.post('http://106.14.83.188:8080/admin/insertcomment',_this.$qs.stringify({
            userId: _this.$store.state.userInfo.userId,
            userNickname:_this.$store.state.userInfo.userNickname,
            microId: _this.hotpub[_this.index].microId,
            // time: _this.$store.state.getTime(),
            wecommentContent: _this.comment_content
          })
        )
        .then(function (response) {
          console.log(response);
          console.log("评论成功！");
          console.log(_this.index);
          console.log(_this.hotpub[_this.index].microId);
          console.log(_this.comment_content);
          setTimeout(function(){
            wx.showToast({
              title:'已评论！',
              icon:'success',
              duration: 1000
            })
          },500)
          // _this.hotpub[i].microComm += 1;
          _this.comment_content = "";
          _this.getPosts();
        })
        .catch(function (error) {
          console.log(error);
        });
        this.talk = !this.talk;
      },
       //获取发布的信息
       getPosts(){
        let _this = this;
         _this.$fly.get('http://106.14.83.188:8080/admin/listhotwespace',_this.$qs.stringify({
            userId: _this.$store.state.userInfo.userId,
          })
        )
        .then(function (response) {
          console.log(response);
         _this.hotpub = response.data.wespaceList;
          for(let index in _this.hotpub){
            console.log(_this.hotpub[index].islike);
            if (_this.hotpub[index].islike===true){
              _this.hotpub[index].islike = "../../static/icon/like-active.png";
            }else { 
              _this.hotpub[index].islike = "../../static/icon/like.png";
            }
          }
          console.log(_this.hotpub);
          console.log("成功获取数据赋值给hotpub");
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      //预览图片
      previewImg_new(i,j){
        wx.previewImage({
          current: this.hotpub[i].images[j],
          urls: this.hotpub[i].images
        });
      },
      }
    }
    
</script>

<style scoped>
 .container{width:100%;height:100vh;background:#e8e8e8;}
 .sousuo{width:100%;height:10vh;background:#e8e8e8;}
  .search{background: #f5f5f5;border-radius: 12px;padding: 5px 10px}
  .swiper{height: 35vh;width: calc(100% - 16px)}
  .icon-item{width:25%;padding: 10px 15px 0 15px;box-sizing: border-box;}
  .icon{width: 10vw;height: 38px;border-radius: 50%;color: #fff;font-size: 25px}
  .adv{border-right: 2px solid #eee}
  .adv img{width: 50px;height: 50px}
  .good{border-bottom: 1px solid #DDD8CE}
  .good img{width: 80px;height: 80px}
  .userpub{
    margin: 0;
    border:1px solid rgb(235, 233, 233);
  }
 .userpub-li{
    background-color: rgba(226, 250, 231, 0.959);
    position: relative;
    border-bottom: 1px solid rgb(235, 233, 233);
  }
  .userpub-li:last-child{
    border: none;
  }
 .user{
  width: 100vw;
  padding: 10rpx;
  margin-top: 10rpx;
  } 
  .user-header{
    height: 100rpx;
    width: 100rpx;
    margin: 0 10px 0 0;
    border: 1px solid #DADADA;
    border-radius: 50%;
    float: left;
    margin-left: 10rpx;
  }
  .name-time{
    height: 35px;
    float: left;
    width: 600rpx;
    margin-top: 2.5%;
  }
  .name-time .name{
    width: 150rpx;
    float: left;
    height: 20px;
    font-size: 14px;
    line-height: 20px;
    margin-top: 2.5%;
  }
  .name-time .time{
    margin-top: 10px;
    float: right;
    height: 15px;
    font-size: 10px;
    margin-right: 150rpx;
  }
  .name-time .del{
    margin-top:2.5px;
    float: right;
    height: 30px;
    font-size: 14px;
    background-color: rgb(255, 151, 151);
  }
  .name-time .del:active{
    background-color:azure;
  }
  .content{
  margin-top: 10rpx;
  width:100vw;
  margin-left: 10rpx;
  flex-wrap: wrap;
  }
  .content-1{
  margin-top: 10rpx;
  float: left;
  font-size: 35rpx;
  margin-left: 10rpx;
  flex-wrap: wrap;
  }
  .imag{
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    vertical-align: middle;
  }
  .imag .imge{
    width: 31.333%;
    height: 30vw;
    margin: 1%;
    overflow: hidden;
    float: left;
  }
  .icons{
    height: 30px;
    margin-top: 5px;
    font-size: 14px;
    line-height: 25px;
    text-align: center;  
  }
  .icons div{
    margin-top:5px;
    height: 20px;
    float: right;
    margin-right: 20px;
  }
  
  .icons div img{
    width: 18px;
    height: 18px;
  }
  .icons div span{
    width: 35px;
    height: 22px;
    font-size: 13px;
    line-height: 22px;
    position: relative;
    margin-left: 2px;
    overflow: hidden;
    /* background-color: chartreuse; */
  }
  .comment{
    font-size: 13px;
  }
  .comment-li{
    line-height: 16px;
    margin: 5px;
  }
  .comment li .username{
    color: #12AADE;
  }
  .comment li .content{
    font-size: 13px
  }
  .comment .toComent{
    height: 30px;
    margin-bottom: 5px;
    margin-top: 10px;
    border: 1px solid #FFC1BB;
    border-radius: 5px;
    text-align: center;
    font-size: 14px;
    line-height: 30px;
    background-color: #fff;
  }
  .comment .toComent:active{
    background-color: #FFEDEB;
  }
  .coment {
    position: fixed;
    top: 20vh;
    left: 50%;
    margin-left: -40vw;
    width: 80%;
    height: 210px;
    border: 1px solid #B2B2B2;
    border-radius: 10px;
    background-color: #fff;
    z-index: 9999999;
  }
  .coment textarea {
    position: relative;
    width: 68vw;
    height: 110px;
    margin: 15px 4vw 0;
    padding: 5px 2vw;
    border: 1px solid #E4E4E4;
    font-size: 15px;
    z-index: 99999999;
  }
  .coment button {
    width: 72vw;
    height: 28px;
    margin-top: 7px;
    font-size: 14px;
    line-height: 28px;
    background-color:  rgb(166, 248, 179);
  }
  .coment button:active {
    background-color: rgb(22, 241, 14);
  }





</style>
