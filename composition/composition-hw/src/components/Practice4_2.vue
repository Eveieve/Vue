<script setup>
import {computed, provide, ref} from 'vue'
import Practice4_2Child from './Practice4_2Child.vue';

const number = ref(10);
const doubleNumber = computed(()=> number.value*2);

provide('number', number);
provide('doubleNumber', doubleNumber); 
</script>
<template>
<Practice4_2Child />
</template>