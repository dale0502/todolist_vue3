 <!-- 定義子組件 -->
<template>
  <div>
    <input
      placeholder="請輸入任務名稱"
      v-model="value"
      @keydown.enter="enter"
    />
  </div>
</template>


<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "navHeader",
  setup(props, ctx) {
    let value = ref("");
    //點擊鍵盤enter確認
    let enter = () => {
      //把輸入框內容傳遞給父組件
      ctx.emit("add", value.value);
      //清空輸入框
      value.value = "";
    };
    return {
      value,
      enter,
    };
  },
});
</script>


<style lang="scss" scoped>
input {
  margin-bottom: 10px;
}
</style>

