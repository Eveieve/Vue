<script setup>
import { computed, reactive, ref } from 'vue';
const refCount = ref(1);

const reactiveCount = reactive({ count: 1 });

// ref() 데이터를 활용할 때는 value 속성 사용
const refDoubleCount = computed(() => refCount.value * 2);

// reactive() 데이터는 value 속성이 필요 없음
const reactiveDoubleCount = computed(() => reactiveCount * 2); // object * number 연산은 (객체 곱하기 숫자)는 NaN이다. 

// computed() 데이터를 출력할 때는 똑같이 value 사용
console.log(refDoubleCount.value);
console.log(reactiveDoubleCount.value); // NaN
</script>

<template>
  <h1>{{ refCount }}</h1>
  <h1>{{ refDoubleCount }}</h1>
  <h1>{{ reactiveDoubleCount }}</h1>
</template>
