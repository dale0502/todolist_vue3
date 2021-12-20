<!-- 定義父組件 -->
<template>
  <div class="container">
    <div>
      <nav-header @add="add"></nav-header>
      <nav-main :list="list" @del="del"></nav-main>
      <nav-footer :list="list" @clear="clear"></nav-footer>
    </div>
  </div>
</template>

<script>
import navHeader from "@/components/navHeader/NavHeader";
import navMain from "@/components/navMain/NavMain";
import navFooter from "@/components/navFooter/NavFooter";

// 定義組件
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Home",
  components: {
    navHeader,
    navMain,
    navFooter,
  },
  setup() {
    let store = useStore();
    let list = computed(() => {
      return store.state.list;
    });
    let value = ref("");
    //添加任務
    let add = (val) => {
      value.value = val;
      //先判斷有沒有存在任務,如果任務存在,不能重複添加
      let flag = true;
      list.value.map((item) => {
        if (item.title === value.value) {
          //有重複的任務
          flag = false;
          alert("任務已存在");
        }
      });
      //沒有重複的
      if (flag) {
        //調用mutation
        store.commit("addTodo", {
          title: value.value,
          complete: false,
        });
      }
      // console.log(val);
    };

    //刪除任務
    let del = (val) => {
      //調用刪除的mutation
      store.commit("delTodo", val);
      console.log(val);
    };

    //清除已完成
    let clear = (val) => {
      store.commit("clear", val);
    };
    return {
      add,
      value,
      list,
      del,
      clear,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  width: 600px;
  border: gray 1px solid;
  margin: 0 auto;
}
</style>
