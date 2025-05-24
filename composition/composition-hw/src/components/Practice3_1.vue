<script setup>
import {ref} from 'vue';
import Practice3_1Child from './Practice3_1Child.vue';

const childName = ref('Alice'); // 'Alice는 reactive 데이터'

function handleGreeting(message) {
    console.log(message);
}
</script>
<template>
<div>
    <Practice3_1Child :name="childName" @greet = "handleGreeting" />
</div>
</template>