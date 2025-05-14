<script setup>
import { ref, watch } from 'vue';
const count = ref(0);

watch(count, (currentValue, prevValue) => { // watch 함수의 콜백함수가 (currentValue,prevValue)=> {console.log(currentValue,prevValue)}
  console.log(currentValue, prevValue);
});

</script>
<template>
  <h1>ref를 사용한 반응형 데이터 변수 count: {{ count }}</h1>
  <button @click="count++">ref 증가</button> 
</template>
