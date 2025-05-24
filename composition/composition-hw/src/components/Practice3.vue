<script>
import Practice3Child from './Practice3Child.vue';
export default {
  components: {
    Practice3Child, // child 등록 
  },
  data() {
    return {
      childName: 'Alice', // 반응형 데이터 정의 
    };
  },
  methods: {
    handleGreeting(message) {
      console.log(message);
    },
  },
};
</script>
<template>
  <div>
    <Practice3Child :name="childName" @greet="handleGreeting" />
  </div>
</template>