<!-- 定義父組件 -->
<template>
  <div>
    <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
    <div>
      {{ list }}
    </div>
  </div>
</template>

<script>
import navHeader from "@/components/navHeader/NavHeader";
import navMain from "@/components/navMain/NavMain";
import navFooter from "@/components/navFooter/NavFooter";

// 定義組件
import { defineComponent, ref, computed} from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Home",
  components: {
    navHeader,
    navMain,
    navFooter,
  },
  setup(props, ctx) {
    let store = useStore()
    let list = computed(() =>{
      return store.state.list
    })
    return {
      list,
    };
  },
});
</script>

<style lang="scss" scoped></style>
