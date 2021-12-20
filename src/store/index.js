import { createStore } from 'vuex'

export default createStore({
  //state 代表定義所需要的狀態 
  state: {
    list : [
      {
        title: "吃飯",
        complete: false,
      },
      {
        title: "睡覺",
        complete: false,
      },
      {
        title: "敲代碼",
        complete: true,
      },
    ],
  },
  //mutations 是用來同步修改status 
  mutations: {
    //添加任務
    addTodo(state,payload){
      state.list.push(payload)
    },
    //刪除任務 splice(下標,個數)
    delTodo(state,payload){
      state.list.splice(payload,1)
    },
    //清除已完成
    clear(state,payload){
      //把過濾後的arr傳近來
      state.list = payload
    }
  },
  //actions 為異步提交mutations ,他無法直接修改status ,如果state需要異步修改,則需要定一個action
  //傳遞兩個參數,第一個參數是store 第二個參數是修改的值
  actions: {
    asyncSetName(store , params){
      setTimeout(() =>{
        //commit是提交mutations 調用mutations的方法
        store.commit('setName',params)

      },2000)
    }
  },
  //modules主要是作模塊化
  modules: {
  }
})

