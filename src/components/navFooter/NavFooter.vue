 <!-- 定義子組件 -->
<template>
  <div class="footer">
    <div>已完成{{ isComplete }} / 全部{{ list.length }}</div>
    <div v-if="isComplete > 0" class="btn">
      <button @click="clear">清除已完成</button>
    </div>
  </div>
</template>


<script>
import { defineComponent, ref, computed } from "vue";
export default defineComponent({
  name: "navFooter",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  setup(props, ctx) {
    let isComplete = computed(() => {
      //過濾已完成,使用fillter方法
      let arr = props.list.filter((item) => {
        return item.complete;
      });
      return arr.length;
    });

    //清除已完成
    let clear = () => {
      let arr = props.list.filter((item) => {
        return item.complete === false; //表示未完成
      });
      ctx.emit("clear", arr); //將未完成任務傳入父組件
      // console.log("clear");
    };
    return {
      isComplete,
      clear,
    };
  },
});
</script>


<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: center;
  .btn {
    margin-left: 10px;
  }
}
</style>