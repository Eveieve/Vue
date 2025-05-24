<script>
import Practice4Child from '@/components/Practice4Child.vue';
export default {
  components: {
    Practice4Child,
  },
  data() {
    return {
      number: 10,
    };
  },
  computed: {
    doubleNumber() {
      return this.number * 2;
    },
  },
  provide() {
    return {
      number: this.number,
      doubleNumber: this.doubleNumber,
    };
  },
};
</script>
<template>
  <Practice4Child />
</template>