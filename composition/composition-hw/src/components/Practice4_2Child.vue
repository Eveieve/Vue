<script setup>
// inject기능을 써야 하니까 vue로 부터 임포트 
import {inject} from 'vue';

const number = inject('number'); // inject 주입해서 쓰다 => 그럼 부모가 provide해야함
const doubleNumber = inject('doubleNumber');


</script>

<template>
      <h1>number: {{ number }}</h1>
  <h1>doubleNumber: {{ doubleNumber }}</h1>
</template>