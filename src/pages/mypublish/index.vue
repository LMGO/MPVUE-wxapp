<template>
  <div>
    <div class="navbar">
      <!-- <div v-for="(item,index) in tabs" :key="index" :id="index" :class="{'navbar_item_on':activeIndex == index}" class="navbar_item" @click="tabClick"> -->
        <!-- <div class="navbar_title">{{item.name}}</div> -->
        <div :class="{navbar_title:showcolor0,navbar_titleactive:!showcolor0}" @click="mywespacepub()">校园空间</div>
        <div :class="{navbar_title:showcolor1,navbar_titleactive:!showcolor1}" @click="myfreempub()">自由市场</div>
        <div :class="{navbar_title:showcolor2,navbar_titleactive:!showcolor2}" @click="myfindthings()">寻物之家</div>
        
     
    </div>
    <!---------------------------校园空间主体-------------------------->
      <div v-show="show0">
          <div class="container">
              <div class="userpub" > 
                <ul>
                  <li v-for="(pub,index) in wespacemypub" :key="index" wx:for-index="hello" class="userpub-li">
                  <!-- <li  class="userpub-li">  -->
                  <div class="user">
                    <img :src="pub.userHead" class="user-header"/>                        
                    <!-- <img class="user-header" :src="userInfo.userHead"> -->
                    <div class="name-time">
                      <div class="name">{{pub.userNickname}}</div>
                      <!-- <div class="name">沐雙惜</div> -->
                      <button class="del" @click="delewespacemypub()">删除</button>
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
                      <img class="" src="/static/icon/talk.png"  @click="totalkwespace(index)">
                      <span>{{pub.microComm}}</span>
                    </div>
                    <!----点赞---->
                    <div class="like">
                      <img :src="pub.islike" @click="toLikewespace(index)">
                      <!-- <img src="/static/icon/like.png" @click="toLikewespace(index)"> -->
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
                        <button @click="toPublishwespacetalk()">发表</button>
                        <button @click="quxiaowespacetalk()">取消</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
         <!---------------------------自由市场主体-------------------------->  
      <div v-show="show1">
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
            <button class="del" @click="delefreemarketmypub()">删除</button>
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
            <span  style="color:red" @click="marketDeal(index)">{{pub.marketDeal}}</span>  
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
  </div>

      </div>
            <!------------寻物主题-------->
            <div v-show="show2">
             <div class="container">
                <div class="userpub" > 
                  <ul>
                    <li v-for="(pub,index) in find" :key="index" wx:for-index="hello" class="userpub-li">
                    <!-- <li  class="userpub-li">  -->
                    <div class="user">
                      <img :src="pub.userHead" class="user-header"/>                        
                      <!-- <img class="user-header" :src="userInfo.userHead"> -->
                      <div class="name-time">
                        <div class="name">{{pub.userNickname}}</div>
                        <!-- <div class="name">沐雙惜</div> -->
                        <button class="del" @click="delefind()">删除</button>
                        <div class="time">{{pub.lfTime}}</div>
                        <!-- <div class="time">2019-6-15</div> -->
                      </div>
                    </div> 
                        <div class="content">
                      <p class="findtitie">#{{pub.lfTheme}}#</p> 
                      <!-- <p class="findtitie">#寻物贴#</p>  -->
                      <p class="content-1">{{pub.lfDes}}</p> 
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
                        <img class="" src="/static/icon/talk.png"  @click="totalkfind(index)">
                        <span>{{pub.lfComm}}</span>
                      </div>
                      <!----点赞---->
                      <div class="like">
                        <!-- <img :src="pub.lfFound" @click="zhangtai(index)"> -->
                        <span>点击管理寻物状态 : </span>
                        <!-- <span style="color:red">已找到</span> -->
                        <span  @click="zhangtai(index)" style="color:red">{{pub.lfFound}}</span>  
                        
                      </div>
                    </div>
                              <div class="comment">
                        <ul class="comment-ul">
                          <li class="comment-li" v-for="(comment, index2) in pub.lfcomment" :key="index2">
                            <!-- <li class="comment-li"> -->
                            <span class="username">{{comment.userNickname}}:</span>
                            <!-- <span class="username">沐雙惜：</span> -->
                            <span class="content">{{comment.lfcommentContent}}</span>
                            <!-- <span class="content">哈哈哈，好难啊</span> -->
                          </li>
                        </ul>
                        <!-- 评论框 -->
                        <div class="coment" v-show="talk">
                          <textarea autofocus="autofocus" rows="6" v-model="comment_content" maxlength="200"></textarea>
                          <button @click="toPublishfindtalk()">发表</button>
                          <button @click="quxiaofindtalk()">取消</button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
             </div>
        </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      showcolor0:false,
      showcolor1:true,
      showcolor2:true,
      show0: true,
      show1: false,
      show2: false,

      index: 0,
      userId:'',
      userwxInfo: {},
      userInfo: {},
      userNickName:'',
      comment_content: '',
      icon_like: "../../static/icon/like.png",
      talk: false,
      wespacemypub:[],
      find:[],
      freemarket:[],
    }
  },
 beforeMount(){
    let _this=this;
    // _this.getPosts();
    _this.userwxInfo=_this.$store.state.myWxInfo;
    _this.userInfo=_this.$store.state.userInfo;
  },
  
  methods:{
    mywespacepub(){
      let _this=this;
      //控制页面名称颜色
      _this.showcolor0=false;
      _this.showcolor1=true;
      _this.showcolor2=true;
      //控制页面显示
      _this.show0=true;
      _this.show1=false;
      _this.show2=false;
       
    },
    myfreempub(){
      let _this=this;
      //控制页面名称颜色
      _this.showcolor0=true;
      _this.showcolor1=false,
      _this.showcolor2=true;
      //控制页面显示
      _this.show0=false;
      _this.show1=true;
      _this.show2=false;
    },
    myfindthings(){
      let _this=this;
      //控制页面名称颜色
      _this.showcolor0=true;
      _this.showcolor1=true,
      _this.showcolor2=false;
      //控制页面显示
      _this.show0=false;
      _this.show1=false;
      _this.show2=true;
    },
     //预览图片
      previewImg_newfind(i,j){
        wx.previewImage({
          current: this.find[i].images[j],
          urls: this.find[i].images
        });
      },
       zhangtai(i){
        let _this = this;
         if(_this.find[i].lfFound == "未找到"){
          // 标记已经找到
          _this.$fly.post('http://106.14.83.188:8080/admin/updatefound',_this.$qs.stringify({
              // userId: _this.$store.state.userInfo.userId,
              lfId: _this.find[i].lfId,
            })
          )
          .then(function (response) {
            console.log(response);
            
          })
          .catch(function (error) {
            console.log(error);
          });
          _this.find[i].lfFound = "已找到";
        }
        else{
          // 取消
            console.log(_this.find[i].lfId);
          _this.$fly.post('http://106.14.83.188:8080/admin/updatenotfound',_this.$qs.stringify({
              // userId: _this.$store.state.userInfo.userId,
              lfId: _this.find[i].lfId,
            })
          )
          .then(function (response) {
            console.log(response);
            console.log("取消点赞！");
              
          })
          .catch(function (error) {
            console.log(error);
          });
          _this.find[i].lfFound = "未找到";
  
        }
      },
      // 点击评论图标弹出发表框
      totalkfind(i){
        this.index = i;
        this.talk = !this.talk;
      },
      //取消评论
      quxiaofindtalk(){
        this.comment_content="";
        this.talk = !this.talk;
      },
      // 发表寻物评论
      toPublishfindtalk(){
        let _this = this;
        _this.$fly.post('http://106.14.83.188:8080/admin/insertlfcomment',_this.$qs.stringify({
            userId: _this.$store.state.userInfo.userId,
            userNickname:_this.$store.state.userInfo.userNickname,
            lfId: _this.find[_this.index].lfId,
            // time: _this.$store.state.getTime(),
            lfcommentContent: _this.comment_content
          })
        )
        .then(function (response) {
          console.log(response);
          console.log("评论成功！");
          console.log(_this.index);
          console.log(_this.find[_this.index].lfId);
          console.log(_this.comment_content);
          setTimeout(function(){
            wx.showToast({
              title:'已评论！',
              icon:'success',
              duration: 1000
            })
          },500)
          _this.comment_content = "";
          _this.getPostsfind();
        })
        .catch(function (error) {
          console.log(error);
        });
        this.talk = !this.talk;
      },
        //获取发布的信息
      getPostsfind(){
        let _this = this;
         _this.$fly.get('http://106.14.83.188:8080/admin/listmylf',
         _this.$qs.stringify({
            userId: _this.$store.state.userInfo.userId,
          })
        )
        .then(function (response) {
          console.log(response);
        

         _this.find = response.data.lostandfoundList;
          for(let index in _this.find){
          
          
            console.log(_this.find[index].lfFound);
            if (_this.find[index].lfFound==true){
              _this.find[index].lfFound = "已找到";
            }else { 
              _this.find[index].lfFound = "未找到";
            }
          }
          console.log(_this.find);
          console.log("成功获取数据赋值给find");
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      //预览图片
      previewImg_newfind(i,j){
        wx.previewImage({
          current: this.find[i].images[j],
          urls: this.find[i].images
        });
      },
      delefind(){
          let _this=this;
          wx.showModal({
          title: '确认删除？',
          content: '删除后将无法找回！！',
          confirmColor: 'red',
          success: function(res) {
          if (res.confirm) {
                 
                 _this.$fly.post('http://106.14.83.188:8080/admin/deletelostandfound',_this.$qs.stringify({
                    // userId: _this.$store.state.userInfo.userId,
                    lfId: _this.find[_this.index].lfId,
                  })
                )
                .then(function (response) {
                  console.log(response);
                    setTimeout(function(){
                        wx.showToast({
                          title:'已删除！',
                          icon:'success',
                          duration: 1000
                        })
                      },500)
                  }
                  )
                .catch(function (error) {
                  console.log(error);
                  setTimeout(function(){
                        wx.showToast({
                          title:'删除失败！',
                          icon:'success',
                          duration: 1000
                        })
                      },500)
                });
                _this.getPostsfind();
            }else if (res.cancel) {
           
           
           }
        }
      })   
      },

//微空间部分
       //预览微空间图片
      previewImg_newwespace(i,j){
        wx.previewImage({
          current: this.wespacemypub[i].images[j],
          urls: this.wespacemypub[i].images
        });
      },
      //点赞
      toLikewespace(i){
        let _this = this;
         if(_this.wespacemypub[i].islike == "../../static/icon/like.png"){
          // 点赞
          _this.$fly.post('http://106.14.83.188:8080/admin/upwespace',_this.$qs.stringify({
              userId: _this.$store.state.userInfo.userId,
              microId: _this.wespacemypub[i].microId,
            })
          )
          .then(function (response) {
            console.log(response);
            console.log("点赞成功！");
            
          })
          .catch(function (error) {
            console.log(error);
          });
          _this.wespacemypub[i].islike = "../../static/icon/like-active.png";
          _this.wespacemypub[i].microUp += 1;
        }
        else{
          // 取消点赞
            console.log(_this.wespacemypub[i].microId);
          _this.$fly.post('http://106.14.83.188:8080/admin/downwespace',_this.$qs.stringify({
              userId: _this.$store.state.userInfo.userId,
              microId: _this.wespacemypub[i].microId,
            })
          )
          .then(function (response) {
            console.log(response);
            console.log("取消点赞！");
              
          })
          .catch(function (error) {
            console.log(error);
          });
          _this.wespacemypub[i].islike = "../../static/icon/like.png";
          _this.wespacemypub[i].microUp -= 1;
        }
      },
      // 点击评论图标弹出发表框
      totalkwespace(i){
        this.index = i;
        this.talk = !this.talk;
      },
      //取消评论
      quxiaowespacetalk(){
        this.comment_content="";
        this.talk = !this.talk;
      },
      // 发表评论
      toPublishwespacetalk(){
        let _this = this;
        _this.$fly.post('http://106.14.83.188:8080/admin/insertcomment',_this.$qs.stringify({
            userId: _this.$store.state.userInfo.userId,
            userNickname:_this.$store.state.userInfo.userNickname,
            microId: _this.wespacemypub[_this.index].microId,
            // time: _this.$store.state.getTime(),
            wecommentContent: _this.comment_content
          })
        )
        .then(function (response) {
          console.log(response);
          console.log("评论成功！");
          console.log(_this.index);
          console.log(_this.wespacemypub[_this.index].microId);
          console.log(_this.comment_content);
          setTimeout(function(){
            wx.showToast({
              title:'已评论！',
              icon:'success',
              duration: 1000
            })
          },500)
          // _this.wespacemypub[i].microComm += 1;
          _this.comment_content = "";
          _this.getPostswespace();
        })
        .catch(function (error) {
          console.log(error);
        });
        this.talk = !this.talk;
      },
        //获取发布的信息
       getPostswespace(){
        let _this = this;
        // _this.$fly.get('http://106.14.83.188:8080/admin/listmy',)
         _this.$fly.get('http://106.14.83.188:8080/admin/listmy',_this.$qs.stringify({
            userId: _this.$store.state.userInfo.userId,
          })
        )
        .then(function (response) {
          console.log(response);
        

         _this.wespacemypub = response.data.wespaceList;
          for(let index in _this.wespacemypub){
          
          
            console.log(_this.wespacemypub[index].islike);
            if (_this.wespacemypub[index].islike===true){
              _this.wespacemypub[index].islike = "../../static/icon/like-active.png";
            }else { 
              _this.wespacemypub[index].islike = "../../static/icon/like.png";
            }
          }
          console.log(_this.wespacemypub);
          console.log("成功获取数据赋值给wespacemypub");
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      //预览图片
      previewImg_newwespace(i,j){
        wx.previewImage({
          current: this.wespacemypub[i].images[j],
          urls: this.wespacemypub[i].images
        });
      },
      delewespacemypub(){
        let _this=this;
          wx.showModal({
          title: '确认删除？',
          content: '删除后将无法找回！！',
          confirmColor: 'red',
          success: function(res) {
          if (res.confirm) {
                 
                 _this.$fly.post('http://106.14.83.188:8080/admin/deletewespace',_this.$qs.stringify({
                    // userId: _this.$store.state.userInfo.userId,
                    microId: _this.wespacemypub[_this.index].microId,
                  })
                )
                .then(function (response) {
                  console.log(response);
                    setTimeout(function(){
                        wx.showToast({
                          title:'已删除！',
                          icon:'success',
                          duration: 1000
                        })
                      },500)
                  }
                  )
                .catch(function (error) {
                  console.log(error);
                  setTimeout(function(){
                        wx.showToast({
                          title:'删除失败！',
                          icon:'success',
                          duration: 1000
                        })
                      },500)
                });
                _this.getPostswespace();
            }else if (res.cancel) {
           
           
           }
        }
      })   
      },
    //自由市场部分
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
      marketDeal(i){
        let _this = this;
         if(_this.freemarket[i].marketDeal === "未交易"){
          // 标记已经找到
          _this.$fly.post('http://106.14.83.188:8080/admin/updatedeal',_this.$qs.stringify({
              marketId: _this.freemarket[i].marketId,
            })
          )
          .then(function (response) {
            console.log(response);
            console.log("设置交易状态成功！");
            
          })
          .catch(function (error) {
            console.log(error);
          });
          _this.freemarket[i].marketDeal = "已交易";
        }
        else{
          // 取消
            console.log(_this.freemarket[i].marketId);
          _this.$fly.post('http://106.14.83.188:8080/admin/updatenotdeal',_this.$qs.stringify({
              marketId: _this.freemarket[i].marketId,
            })
          )
          .then(function (response) {
            console.log(response);
            console.log("取消交易状态！");
              
          })
          .catch(function (error) {
            console.log(error);
          });
          _this.freemarket[i].marketDeal = "未交易";
  
        }
      },
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
         _this.$fly.get('http://106.14.83.188:8080/admin/listmymarket',
         _this.$qs.stringify({
            userId: _this.$store.state.userInfo.userId,
          })
        )
        .then(function (response) {
          console.log(response);
        

         _this.freemarket = response.data.marketList;
          for(let index in _this.freemarket){
          
            console.log(_this.freemarket[index].marketDeal);
             if (_this.freemarket[index].islike == true) {
              _this.freemarket[index].islike = "../../static/icon/like-active.png";
            }
            else {
              
              _this.freemarket[index].islike = "../../static/icon/like.png";
            }


            if (_this.freemarket[index].marketDeal==true){
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
      delefreemarketmypub(){
          let _this=this;
          wx.showModal({
          title: '确认删除？',
          content: '删除后将无法找回！！',
          confirmColor: 'red',
          success: function(res) {
          if (res.confirm) {
                 
                 _this.$fly.post('http://106.14.83.188:8080/admin/deletemarket',_this.$qs.stringify({
                    // userId: _this.$store.state.userInfo.userId,
                    marketId: _this.freemarket[_this.index].marketId,
                  })
                )
                .then(function (response) {
                  console.log(response);
                    setTimeout(function(){
                        wx.showToast({
                          title:'已删除！',
                          icon:'success',
                          duration: 1000
                        })
                      },500)
                  }
                  )
                .catch(function (error) {
                  console.log(error);
                  setTimeout(function(){
                        wx.showToast({
                          title:'删除失败！',
                          icon:'success',
                          duration: 1000
                        })
                      },500)
                });
                _this.getfreemarketPosts();
            }else if (res.cancel) {
           
           
           }
        }
      })   
      }
  },
   
   onShow(){
     let _this=this;
      _this.getPostsfind();
      _this.getPostswespace();
      _this.getfreemarketPosts();
    },


}
</script>

<style scoped>
 .navbar {
    width: 100vw;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    position: fixed;
    z-index: 500;
    top: 0;
    padding-bottom: 0;
    height: 8vh;
    border-bottom: 1px solid rgb(233, 229, 229);
    background-color: rgba(246, 250, 249, 0.534);
  }
  .navbar_title {
    justify-content:space-around;
    margin-left: 80rpx;
    margin-top:2vh; 
    color: #000;
    display: inline-block;
    font-size: 18px;
    max-width: 100%;
  }
   .navbar_titleactive {
    justify-content:space-around;
    margin-left: 80rpx;
    margin-top:2vh; 
    color: rgb(236, 71, 71);
    display: inline-block;
    font-size: 18px;
    max-width: 100%;
  }

  .container{
  
  display: fiex;
  flex-direction: column;
  background-color: rgba(245, 250, 250, 0.959);
  margin:8vh 0 0 0;
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
