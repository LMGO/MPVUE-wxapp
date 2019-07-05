<template>
  <div class=".container">
      <div class="pub">
          <div class="threepub">
            <button @click="lifepub()">生活贴</button>
            <button @click="mar()">交易贴</button>
            <button @click="findthings()">寻物贴</button>
          </div>
      </div>
    
  </div>
</template>

<script>
 
export default {
  methods :{
    lifepub(){
       wx.navigateTo({url:"../../pages/campusPubPage/main"});
    },
    findthings(){
       wx.navigateTo({url:"../../pages/findthingsPubPage/main"});
    },
    mar(){
       wx.navigateTo({url:"../../pages/freemarketPubPage/main"});
    }
  },
  onShow () {
    wx.setNavigationBarTitle({title: '发布'})
  }
}
</script>


<style scoped>
.container{
  background-color: rgba(226, 250, 231, 0.959);
  margin: 0;
  padding: 0;
  height: 100vh;
 
  }
.pub{
  height:50vh ;
  width: 95vw;
  margin-top:20vh;
  /* background: aqua; */
  border-radius: 20%;
  border: 1px solid rgb(236, 253, 221);
  background-color: rgb(228, 240, 230);
}

.threepub{
  margin:10vh 0.5vh;
  display: fiex;
  flex-direction: column;
  height: 30vh;
}
button{
  color: rgb(5, 5, 5);
  /* background: aqua; */
  background-color: rgb(253, 253, 252);
}
button:active{
   background-color: rgb(197, 245, 213);
}
</style>
