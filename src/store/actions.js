import { MYWXINFO, USERINFO} from './mutation-type'
// import listData from '../datas/list-data'

export default {

 getMyWxInfo({commit}, data){
  commit(MYWXINFO, data)
  },
  getUserInfo({commit}, data){
    commit(USERINFO, data)
  },
}