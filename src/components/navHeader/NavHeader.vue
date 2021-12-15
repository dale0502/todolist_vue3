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
  setup(props) {
    let value = ref("");
    //點擊鍵盤enter確認
    let enter = () => {
      alert(value.value);
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

