<template>
  <div>
    <!-- 发表内容填写框 -->
    <div class="content">
      <textarea v-model="lfTheme" type="text" placeholder="主题..." rows="1" maxlength="15" style="height:30px; border-bottom: 1px solid rgb(235, 233, 233); ;"></textarea>
      <textarea v-model="lfDes" type="text" placeholder="物品描述..." rows="5" maxlength="200"></textarea>
    </div>
    <!-- 本地图片添加区 -->
    <div class="j-pic-upload">
      <img @click="previewImg(index)" v-for="(src,index) in urls" :key="src" :src="src" :style="{'width':width || '150rpx','height':height || '150rpx'}" class="img" >
      <div class="j-upload-btn" @click="selectImage()" :style="{'width':width || '150rpx','height':height || '150rpx'}">
        <span class="j-upload-add">+</span>
      </div>
    </div>
    <!-- 发表按钮 -->
    <button @click="publish">发表</button>
  </div>
</template>
 
<script>
    export default {
      props:["width","height","max","srcs"],
      data(){
        return {
          userId:'',
          // lfTime:'',
          urls:[],
          post: {
            lfDes: '',
            lfTime: '',
          }
        }
      },
      beforeMount(){
        // let _this=this;
        // _this.UserId=_this.$store.state.userInfo.userId;
        // _this.userNickname=_this.$store.state.userInfo.userNickname;
        // _this.userHead=_this.$store.state.userInfo.userHead;

      },
      mounted(){
        this.urls = this.srcs || [];
      },
      methods:{

        selectImage(){
          let that = this;
          wx.chooseImage({
            count: that.max || 9,
            sizeType: ['original','compressed'],
            sourceType: ['album', 'camera'],
            success: function (res) {
              that.urls = res.tempFilePaths;
            }
          })
        },
        previewImg(index){
          let that = this;
          wx.showActionSheet({
            itemList:["预览","删除"],
            success: function(res) {
              if(res.tapIndex === 0){
                wx.previewImage({
                  current:that.urls[index],
                  urls:that.urls
                });
              } else {
                that.urls.splice(index,1);
                that.$emit("delete",that.urls);
              }
            },
          });
        },  


        // 发表帖子
        publish(){

          let _this = this;
          // _this.lfTime = _this.$store.state.getTime();
          // console.log(_this.tempPid);
          // console.log(_this.$store.state.getTime());

          wx.showToast({
              icon: "loading",
              title: "正在上传"
            });

          _this.$fly.post('http://106.14.83.188:8080/admin/insertlostandfound',_this.$qs.stringify({
              userId: _this.$store.state.userInfo.userId,
              lfTheme:_this.lfTheme,
              userNickname:_this.$store.state.userInfo.userNickname,
              lfDes: _this.lfDes,
              lfTime:_this.$store.state.getTime(),
              userHead:_this.$store.state.userInfo.userHead
            })
          )
          .then(function (response) {

            console.log(response);
                  let id=response.data
            // for(let i = 0; i < _this.urls.length; i ++){
            //   wx.uploadFile({
            //     url: "http://106.14.46.10:8081/MakeupYou/multiUpload",
            //     filePath: _this.urls[i], 
            //     name: 'file',
            //     header: { "Content-Type": "multipart/form-data" },
            //     formData: {
            //       lfId:id
            //     },
            //     success: function (res) {
            //       console.log(res);
            //       if (res.statusCode != 200) { 
            //         wx.showModal({
            //           title: '提示',
            //           content: '上传失败',
            //           showCancel: false
            //         })
            //         return;
            //       }
            //       var data = res.data;
            //     },
            //     fail: function (e) {
            //       console.log(e);
            //       wx.showModal({
            //         title: '提示',
            //         content: '上传失败',
            //         showCancel: false
            //       })
            //     },
            //     complete: function () {
            //        //隐藏Toast
            //     }
            //   })
            // }
            // 返回
            // wx.hideToast();
            wx.navigateBack({
              delta: 1
            });
            wx.showToast({
              title:'发表成功！',
              icon:'success',
              duration: 1000
            });
            _this.lfTheme="";
            _this.lfDes = ""
          })
          .catch(function (error) {
            console.log(error);
            wx.showToast({
              title:'发表失败！',
              icon:'success',
              duration: 1000
            });
          });
        }
      }
    };
</script>
 
<style scoped>
  .content{
    min-height: 100px;
  }
  .content input{
    width: 95%;
    height: 40px;
    margin: 2px 2.5%;
    font-size: 17px;
    line-height: 40px;
    border-bottom: 1px solid #E4E4E4;
  }
  .content textarea{
    width: 95%;
    height: 90px;
    margin: 12px 2.5%;
    font-size: 16px;
  }
  .j-pic-upload{
    padding-left: 49rpx;
    padding-bottom: 25rpx;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: 1px solid #E2E2E2;
  }
  .j-upload-btn{
    border: 1px solid #ddd;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 20rpx;
  }
  .j-upload-add{
    font-size: 80rpx;
    font-weight: 500;
    color:#C9C9C9;
  }
  .img{
    margin:10rpx 20rpx 10rpx 0;
  }
  .img:last-child{
    margin:10rpx 0 10rpx 0;
  }
  button{
    position: relative;
    top: 20px;
    width: 90%;
    height: 40px;
    font-size: 16px;
    line-height: 40px;
    background-color: #dcf8de;;
    margin: 0 auto;
    border: none;
    outline: none;
    border-radius: 4px;
    cursor: pointer;
    text-align:center;
  }
  button:active{
    background-color: rgb(255, 248, 248);
  }
</style>