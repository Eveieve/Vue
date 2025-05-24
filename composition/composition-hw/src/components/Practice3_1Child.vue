<script setup>
const props = defineProps({
    name: String
});

const emit = defineEmits(['greet']); // greet이라는 이벤트를 부모에게로

function sendGreeting() {
    emit('greet', `Hello, ${props.name}`) // 부모의 props로 받은 속성을 다시 부모로 보내줌 
;}
</script>
<template>
    <div>
        <button @click="sendGreeting">Send Greeting</button>
    </div>
</template>