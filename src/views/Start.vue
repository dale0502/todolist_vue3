<!-- 定義父組件 -->
<template>
  <div>
    <button @click="start">開始任務</button>
  </div>
</template>

<script>
// 定義組件
import { defineComponent, ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "Start",
  setup(props, ctx) {
    // router 是全局路由對象
    let router = useRouter();
    // route 是當前路由對象
    let route = useRoute;
    console.log(route);

    let name = ref("jack");
    let num = ref(10);
    let obj = ref({
      msg: "start",
    });

    onMounted(() => {
      //組件掛載的過程
      //數據  dom ..
      console.log("onMounted");
    });
    console.log("setup");

    //push 如果是傳object的形式,就可以傳遞參數
    //query傳參

    let start = () => {
      router.push({
        // path: "/home",
        name: "Home",
        params: {
          name: name.value,
          num: num.value,
          obj: JSON.stringify(obj.value),
        },
      });
    };
    return {
      start,
    };
  },
});
</script>

<style lang="scss" scoped></style>
