<template>
  <div class="details">
    <h1>This is an detail page</h1>
  </div>
  <child :msg="msg" @send="send"></child>
</template>

<script>
import { defineComponent, ref } from "vue";
import child from "../components/child/Child";
export default defineComponent({
  name: "Detail",
  components: {
    child,
  },
  setup() {
    let msg = ref("這是父組件的數據");
    let send = (val) => {
      console.log(val);
    };
    return {
      msg,
      send,
    };
  },
});
</script>

<style>
</style>