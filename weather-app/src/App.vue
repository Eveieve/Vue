<script setup>
import { RouterView } from 'vue-router'; // 라우터뷰라는 함수를 받아오기 
import { onBeforeMount, onBeforeUnmount} from 'vue';

const init = () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      };

      onBeforeMount(()=> {
        init();
        window.addEventListener("resize", init); // resize라는 이벤트를 듣고 있어라
      });

      onBeforeUnmount(() => {
  window.removeEventListener('resize', init);
});

</script>
<template>
    <RouterView/>
</template>