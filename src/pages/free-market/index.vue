<template>
  <div class="container">
    <div class="userpub" > 
      <ul>
        <li v-for="(pub,index) in freemarket" :key="index" wx:for-index="hello" class="userpub-li">
        <!-- <li  class="userpub-li">  -->
        <div class="user">
          <img :src="pub.userHead" class="user-header"/>                        
          <!-- <img class="user-header" :src="userInfo.userHead"> -->
          <div class="name-time">
            <div class="name">{{pub.userNickname}}</div>
            <!-- <div class="name">沐雙惜</div> -->
            <!-- <button class="del" @click="dele()">删除</button> -->
            <div class="time">{{pub.marketTime}}</div>
            <!-- <div class="time">2019-6-15</div> -->
          </div>
        </div> 
        <div class="content">
          <p class="findtitie">#{{pub.marketTheme}}#</p> 
           <!-- <p class="findtitie">#寻物贴#</p>  -->
          <p class="content-1">{{pub.marketDes}}</p> 
          <!-- <p class="content-1">菜鸟，哈哈哈哈哈哈哈哈,哈哈哈哈哈哈哈哈哈哈哈哈哈</p>  -->
        </div>
        <div class="imag">
          <!-- <img v-for="(image,index1) in pub.images" :key="index1" class="image" @click="previewImg_newfreemarketpub(index,index1)" :src="image"/>  -->
          <img class="imge" src="/static/images/user.png" alt="">
          <img class="imge" src="/static/images/user.png" alt="">
          <img class="imge" src="/static/images/user.png" alt="">
        </div> 
        <!-----评论和点赞----->
        <div class="icons">
        <!-----评论---->
          <div class="talk">
            <img class="" src="/static/icon/talk.png"  @click="totalkfreemarket(index)">
            <span>{{pub.marketComm}}</span>
          </div>
          <!----点赞---->
          <div class="like">
             <!-- <span @click="zhangtai(index)">状态 : </span> -->
             <span >交易状态 : </span>
             <!-- <span style="color:red">已找到</span> -->
            <span  style="color:red">{{pub.marketDeal}}</span>  
            <img :src="pub.islike" @click="toLikefreemarket(index)" style="margin-lift:20rpx;">
            <!-- <img src="/static/icon/like.png" @click="toLikefreemarket(index)"> -->
            <span>{{pub.marketUp}}</span>
            <!-- <span>5</span> -->
            
          </div>
        </div>
        <div class="comment">
            <ul class="comment-ul">
              <li class="comment-li" v-for="(comment, index2) in pub.marcomment" :key="index2">
                 <!-- <li class="comment-li"> -->
                <span class="username">{{comment.userNickname}} : </span>
                <!-- <span class="username">沐雙惜：</span> -->
                <span class="">{{comment.marcommentContent}}</span>
                <!-- <span class="content">哈哈哈，好难啊</span> -->
              </li>
            </ul>
            <!-- 评论框 -->
            <div class="coment" v-show="talk">
              <textarea autofocus="autofocus" rows="6" v-model="comment_content" maxlength="200"></textarea>
              <button @click="toPublishfreemarkettalk()">发表</button>
              <button @click="quxiaomarkettalkpub()">取消</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    
     <!-- 发表按钮 -->
      <freemarketpub></freemarketpub>  
  </div>
</template>

<script>
import freemarketpub from "@/components/freemarketpub"
export default {
data(){
  return{
    index: 0,
    userId:'',
    userwxInfo: {},
    userInfo: {},
    userNickName:'',
    freemarket:[],
    comment_content: '',
    icon_like: "../../static/icon/like.png",
    talk: false,
    

    comment_content: '',
    talk: false,

  }

},
  components:{
    freemarketpub
  },
  
 beforeMount(){
    let _this=this;
    _this.userwxInfo=_this.$store.state.myWxInfo;
    _this.userInfo=_this.$store.state.userInfo;
  },
  methods:{
      //预览图片
      previewImg_newfreemarketpub(i,j){
        wx.previewImage({
          current: this.freemarket[i].images[j],
          urls: this.freemarket[i].images
        });
      },
     //点赞
      toLikefreemarket(i){
        let _this = this;
         if(_this.freemarket[i].islike == "../../static/icon/like.png"){
          // 点赞
          _this.$fly.post('http://106.14.83.188:8080/admin/upmarket',_this.$qs.stringify({
              userId: _this.$store.state.userInfo.userId,
              marketId: _this.freemarket[i].marketId,
            })
          )
          .then(function (response) {
            console.log(response);
            console.log("点赞成功！");
            
          })
          .catch(function (error) {
            console.log(error);
          });
          _this.freemarket[i].islike = "../../static/icon/like-active.png";
          _this.freemarket[i].marketUp += 1;
        }
        else{
          // 取消点赞
            console.log(_this.freemarket[i].marketId);
          _this.$fly.post('http://106.14.83.188:8080/admin/downmarket',_this.$qs.stringify({
              userId: _this.$store.state.userInfo.userId,
              marketId: _this.freemarket[i].marketId,
            })
          )
          .then(function (response) {
            console.log(response);
            console.log("取消点赞！");
              
          })
          .catch(function (error) {
            console.log(error);
          });
          _this.freemarket[i].islike = "../../static/icon/like.png";
          _this.freemarket[i].marketUp -= 1;
        }
      },
       //状态
      // zhangtai(i){
      //   let _this = this;
      //    if(_this.newpub[i].marketDeal == "未找到"){
      //     // 标记已经找到
      //     _this.$fly.post('http://106.14.83.188:8080/admin/',_this.$qs.stringify({
      //         userId: _this.$store.state.userInfo.userId,
      //         marketId: _this.newpub[i].marketId,
      //       })
      //     )
      //     .then(function (response) {
      //       console.log(response);
      //       console.log("点赞成功！");
            
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
      //     _this.newpub[i].marketDeal = "已找到";
      //   }
      //   else{
      //     // 取消
      //       console.log(_this.newpub[i].marketId);
      //     _this.$fly.post('http://106.14.83.188:8080/admin/updatenotfound',_this.$qs.stringify({
      //         userId: _this.$store.state.userInfo.userId,
      //         marketId: _this.newpub[i].marketId,
      //       })
      //     )
      //     .then(function (response) {
      //       console.log(response);
      //       console.log("取消点赞！");
              
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
      //     _this.newpub[i].marketDeal = "未找到";
  
      //   }
      // },
      // 点击评论图标弹出发表框
      totalkfreemarket(i){
        this.index = i;
        this.talk = !this.talk;
      },
      //取消评论
      quxiaomarkettalkpub(){
        this.comment_content="";
        this.talk = !this.talk;
      },
      // 发表评论
      toPublishfreemarkettalk(){
        let _this = this;
        _this.$fly.post('http://106.14.83.188:8080/admin/insertmarcomment',_this.$qs.stringify({
            userId: _this.$store.state.userInfo.userId,
            userNickname:_this.$store.state.userInfo.userNickname,
            marketId: _this.freemarket[_this.index].marketId,
            // time: _this.$store.state.getTime(),
            marcommentContent: _this.comment_content
          })
        )
        .then(function (response) {
          console.log(response);
          console.log("评论成功！");
          console.log(_this.index);
          console.log(_this.freemarket[_this.index].marketId);
          console.log(_this.comment_content);
          setTimeout(function(){
            wx.showToast({
              title:'已评论！',
              icon:'success',
              duration: 1000
            })
          },500)
          _this.comment_content = "";
          _this.getfreemarketPosts();
        })
        .catch(function (error) {
          console.log(error);
        });
        this.talk = !this.talk;
      },
        //获取发布的信息
       getfreemarketPosts(){
        let _this = this;
         _this.$fly.get('http://106.14.83.188:8080/admin/listmarket',
         _this.$qs.stringify({
            userId: _this.$store.state.userInfo.userId,
          })
        )
        .then(function (response) {
          console.log(response);
        

         _this.freemarket = response.data.marketList.reverse();
          for(let index in _this.freemarket){
          
            console.log(_this.freemarket[index].marketDeal);
             if (_this.freemarket[index].islike == true) {
              _this.freemarket[index].islike = "../../static/icon/like-active.png";
            }
            else {
              
              _this.freemarket[index].islike = "../../static/icon/like.png";
            }
            if (_this.freemarket[index].marketDeal===true){
              _this.freemarket[index].marketDeal = "已交易";
            }else { 
              _this.freemarket[index].marketDeal = "未交易";
            }
          }
          console.log(_this.freemarket);
          console.log("成功获取数据赋值给freemarket");
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      //预览图片
      previewImg_newfreemarketpub(i,j){
        wx.previewImage({
          current: this.freemarket[i].images[j],
          urls: this.freemarket[i].images
        });
      },
  },
   
   onShow(){
     let _this=this;
      _this.getfreemarketPosts();
    },
}
</script>

<style scoped>
  .container{
  display: fiex;
  flex-direction: column;
  background-color: rgba(245, 250, 250, 0.959);
  margin: 0;
  padding: 0;
  /* overflow: hidden; */
  }
  .userpub{
    margin: 0;
    border:1px solid rgb(235, 233, 233);
  }
 .userpub-li{
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
  background-color: blue
  }

  .findtitie{
  margin-top: 15rpx;
  float: left;
  font-size:35rpx;
  margin-left: 10rpx;
  color: rgb(255, 8, 8);
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
    margin-right: 40px;
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
