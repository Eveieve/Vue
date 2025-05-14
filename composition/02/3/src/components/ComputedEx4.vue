<script setup>
import { computed, reactive, ref } from 'vue';
const refCount = ref(0);
const reactiveCount = reactive({ count: 0 }); // 0에서 newValue가 됨

const refDoubleCount = computed({
  get() {
    return refCount.value * 2; // refCount.value 는 newValue가 된 상태. 여기서 * 2 를 반환. 
  },
  set(newValue) { // 외부로부터 값을 받아와 
    refCount.value = newValue; // refCount.value의 값을 newValue로 세팅.
  },
});

const reactiveDoubleCount = computed({
  get() {
    return reactiveCount.count * 2;  // reactiveCount.count = newValue가 되었음 
  },
  set(newValue) { // 외부로부터 값을 받아와 
    reactiveCount.count = newValue;
  },
});
//1초 뒤에 refCount와 reactiveCount의 count 속성의 값을 변경함
//그러면 이를 참조해서 계산하는 computed() 함수의 데이터도 함께 자동 변경됨
setTimeout(() => {
  refCount.value = 10; // 
  reactiveCount.count = 20;
}, 1000);
</script>
<template>
  <h1>{{ refDoubleCount }}</h1>
  <h1>{{ reactiveDoubleCount }}</h1>
</template>
