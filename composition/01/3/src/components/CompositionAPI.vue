<script setup>
import { computed, ref } from 'vue';

const count = ref(0);
const doubleCount = computed(() => count.value * 2);
const increment = () => count.value++;
const decrement = () => count.value--;
</script>
<template>
  <h1>Count: {{ count }}</h1>
  <h2>Double Count: {{ doubleCount }}</h2>
  <button @click="increment">증가</button>
  <button @click="decrement">감소</button>
</template>
