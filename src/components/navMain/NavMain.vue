 <!-- 定義子組件 -->
<template>
  <div>
    <div v-if="list.length > 0">
      <div v-for="(item, index) in list" :key="index">
        <div class="item">
          <input type="checkbox" v-model="item.complete" />
          {{ item.title }}
          <button class="del" @click="del(item, index)">刪除</button>
        </div>
      </div>
    </div>
    <div v-else>暫無任務</div>
  </div>
</template>


<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "navMain",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  emits: ["del"],
  setup(props, ctx) {
    //刪除任務
    let del = (item, index) => {
      ctx.emit("del", index);
      // console.log(item);
      // console.log(index);
    };

    return {
      del,
    };
  },
});
</script>


<style lang="scss" scoped>
.item {
  height: 35px;
  line-height: 35px;
  position: relative;
  width: 180px;
  cursor: pointer;
  button {
    position: absolute;
    right: 20px;
    top: 6px;
    display: none;
  }
  &:hover {
    background: #ddd;
    button {
      display: block;
    }
  }
}
</style>



vue