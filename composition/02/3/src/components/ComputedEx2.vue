<script setup>
import { computed, reactive, ref } from 'vue';
const refCount = ref(1);
const reactiveCount = reactive({ count: 1 });

const refDoubleCount = computed(() => refCount.value * 2); // refDoubleCount 는 computed()를 사용함. 

const reactiveDoubleCount = computed(() => reactiveCount.count * 2);
setTimeout(() => {
  refDoubleCount.value = 20; // 1초 뒤, 'computed value is readonly'
}, 1000);
</script>
<template>
  <h1>{{ refDoubleCount }}</h1>
  <h1>{{ reactiveDoubleCount }}</h1>
</template>
