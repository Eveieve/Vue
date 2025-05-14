<script setup>
import { ref, watch, watchEffect, watchPostEffect } from 'vue';
const message = ref('');
const messageParagraph = ref(null);

// message는 반응형 데이터 변수
watch(message, () => {
  if (message.value) { // 값이 있다면 
    console.log(`watch호출됨:${messageParagraph.value.innerText} `);
  }
});

watchEffect(() => {
  if (message.value) {
    console.log(`watchEffect호출됨:${messageParagraph.value.innerText} `);
  }
});

watchPostEffect(() => {
  if (message.value) {
    console.log(`watchPostEffect호출됨:${messageParagraph.value.innerText} `);
  }
});

</script>
<template>
  <div>
    <!-- v-model 양방향 바인딩 -->
    <input v-model="message" placeholder="메시지를 입력하세요." />
    <p ref="messageParagraph">{{ message }}</p>
  </div>
</template>
