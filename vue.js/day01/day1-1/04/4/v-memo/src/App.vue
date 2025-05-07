<script>
export default {
  data() {
    return {
      name: 'Nanhee Jeong'
    };
  }
}
</script>
<template>
  <!-- 양방향 연결   -->
<!-- <input type="text" v-model="message"/> {{ message }} -->
<!-- <input type="text" @input="onChangeHandler($event)"/> {{ message }} -->
<div >{{ name }}</div>
</template>