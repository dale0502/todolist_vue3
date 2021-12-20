<template>
  <div>
    <h1>這是child組件</h1>
    <h1>父組件傳遞：{{ msg }}</h1>
    <button @click="send">傳值給父組件</button>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
  name: "Child",
  //接收父組件傳遞過來的參數
  //props接收的數據也不能直接改
  props: {
    msg: {
      //數據類型校驗
      type: String,
      required: true,
    },
  },
  setup(props, ctx) {
    let childMsg = ref("我是子組件的數據");
    let send = () => {
      //通過 ctx.emit(分發事件)
      //emit是一個方法,第一個參數為分發事件名稱,第二個為傳遞的數據
      ctx.emit("send", childMsg.value);
    };

    onMounted(() => {
      ctx.emit("send", childMsg.value);
    });

    console.log(props.msg);
    return {
      childMsg,
      send,
    };
  },
});
</script>

<style>
</style>