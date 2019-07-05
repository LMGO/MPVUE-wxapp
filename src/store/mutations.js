import {MYWXINFO, USERINFO} from './mutation-type'

export default {
    [MYWXINFO](state, data){
        state.myWxInfo = data;
        console.log("用户微信信息获取成功");
      },
    [USERINFO](state, data){
      state.userInfo = data;
      console.log("用户自定义信息获取成功");
    }
  }
  