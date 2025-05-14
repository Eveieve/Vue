<script setup>
import { ref } from 'vue';
import RefEx2Child from '@/components/RefEx2Child.vue';
const componentRef = ref(null); // 템플릿에서 쓸 ref속성에 대한 값?을 왜 널로 설정하지? => 참조값의 기본값 
setTimeout(() => {
  console.log(componentRef.value.number); // 자식인 RefEx2Child 컴포넌트 인스턴스에 접근
  console.log(componentRef.value.doubleNumber); // 자식인 RefEx2Child 컴포넌트 인스턴스에 접근
}, 1000);
</script>
<template>
  <RefEx2Child ref="componentRef" />
</template>
