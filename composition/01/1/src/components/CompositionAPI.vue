<script setup>
import { computed, ref } from 'vue';

const count = ref(0);
const doubleCount = computed(() => count.value * 2); // data 기반으로 만드는 데이터
const doubleCountPlus = computed(()=> count.value *2 + 1);
const increment = () => count.value++;
</script>
<template>
  <h1>Count: {{ count }}</h1>
  <h2>Double Count: {{ doubleCount }}</h2>
  <h2>Double Count and plus: {{ doubleCountPlus }}</h2>
  <button @click="increment">증가</button>
</template>
