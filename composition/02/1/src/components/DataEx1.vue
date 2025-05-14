<script setup>
import { ref } from 'vue';
const count = ref(2); // 기본 자료형 사용

const state = ref({
  // 참조 자료형 사용
  count: 0,
}); // 

setTimeout(() => {
  count.value++; // count 값 1 증가
}, 1000);

setTimeout(() => {
  state.count++; // state 객체의 count 속성 값 1 증가
}, 1000); // 1초후에 바뀌지 않네? => 왜 ? => 객체, 배열같은 것은 그까지 도달하지 못함 , '반응성의 범위가 다르다' => 하지만 우리가 다루는 것은 대부분 객체. => 다룰줄 알아야함 => state.value.count++ 하면 됨. 
console.log(count.value); // 기본 자료형 그냥 읽기
console.log(state.value.count); // 참조 자료형 count의 값 읽기 
</script>
<template>
  <h1>count : {{ count }}</h1>
  <h1>state : {{ state.count }}</h1>
</template>
