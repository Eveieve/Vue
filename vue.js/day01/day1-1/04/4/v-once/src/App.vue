<script>
export default {
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    increasement() {
      this.number++;
    },
  },
};
</script>
<template>
  <h1 v-once>{{ number }}</h1>
  <button type="button" @click="increasement">증가</button>
</template>
