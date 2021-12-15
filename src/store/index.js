import { createStore } from 'vuex'

export default createStore({
  //state 代表定義所需要的狀態 例如定義一個name= dale ,定義後,這個內容在每個組件當中就都可以去使用
  state: {
    name: 'dale'
  },
  //mutations 是用來同步修改status ,都是方法
  //傳遞兩個參數,第一個參數為state ,第二個參數是需要修改的值
  //payload 是可選參數,如果有不需要修改的值可以不傳
  mutations: {
    setName(state,payload){
      state.name = payload   //傳入payload,忽略state
      state.name.slice(0,1)  //調用方法傳值
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
