 <!-- 定義子組件 -->
<template>
  <div v-for="(item, index) in list" :key="index">
    <div class="item">
      <input type="checkbox" v-model="item.complete" />
      {{ item.title }}
      <button class="del" @click="del(item, index)">刪除</button>
    </div>
  </div>
</template>


<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "navMain",
  setup(props) {
    let list = ref([
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
        complete: false,
      },
    ]);
    //刪除任務
    let del = (item, index) => {
      console.log(item);
      console.log(index);
    };

    return {
      list,
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