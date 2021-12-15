<!-- 定義父組件 -->
<template>
  <div>
    <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
  </div>

  <!-- <div @click="clickNum">
    {{ num }}
  </div>
  <div @click="clickNum1(1000)">
    {{ num1 }}
  </div> -->
</template>

<script>
import navHeader from "@/components/navHeader/NavHeader";
import navMain from "@/components/navMain/NavMain";
import navFooter from "@/components/navFooter/NavFooter";

// 定義組件
import { defineComponent, ref, reactive, toRefs } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    navHeader,
    navMain,
    navFooter,
  },
  setup(props, ctx) {
    // let num1 = ref(11);
    // let data = reactive({
    //   num: 10,
    //   name: "dale",
    //   age: 20,
    //   obj: {
    //     price: 20,
    //   },
    //   arr: ["a", "b", "c", "d"],
    // });

    // let clickNum = () => {
    //   alert("點擊了num");
    // };

    // let clickNum1 = (val) => {
    //   alert(val);
    // };

    return {
      // ...toRefs(data),
      // num1,
      // clickNum,
      // clickNum1,
    };
  },
});
</script>

<style lang="scss" scoped></style>
