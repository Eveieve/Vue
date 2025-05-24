<script>
export default {
  props: {
    name: "Alice", // props라고 정의 되어 있는건 뭐지? 
  },
  emits: ['greet'], // greet 이라는 이벤트를 부모로 보낸다
  methods: {
    sendGreeting() {
      this.$emit('greet', `Hello, ${this.name}!`);
    },
  },
};
</script>
<template>
  <div>
    <button @click="sendGreeting">Send Greeting</button>
  </div>
</template>