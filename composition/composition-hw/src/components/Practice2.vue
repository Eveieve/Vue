<script setup>
import { ref, watch, computed} from 'vue';
const count = ref(0);

const doubledCount = computed(()=> {
    return count.value * 2;
});

const increment = function() {
    count.value++;
}

watch(count, (newVal, oldVal) => {
    console.log(`Count changed from ${oldVal} to ${newVal}`);
}) 

</script>
<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Doubled Count: {{ doubledCount }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>