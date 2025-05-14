<script setup>
import { computed, ref } from 'vue';
const number = ref(5);
const doubleNumber = computed(() => number.value * 2);

// defineExpose() 함수로 변수를 정해놓고, 이 값은 부모에서만 접근 가능하도록. 
defineExpose({
  number,
  doubleNumber,
});
</script>
<template>
  <h1>{{ number }}</h1>
  <h1>{{ doubleNumber }}</h1>
</template>
