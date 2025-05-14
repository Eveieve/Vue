<script setup>
import { reactive } from 'vue';
const state = reactive({
  // 이런 참조 자료형만 가능
  count: 0,
});
// const state2 = reactive(0); // reactive는 그냥 0같은 기본 자료형을 반응형으로 만들 수 없음. 
setTimeout(() => {
  state.count++;
}, 2000)
console.log(state.count); // or...state.value.count
</script>

<template>
<h1>state: {{ state.count }}</h1>

</template>
