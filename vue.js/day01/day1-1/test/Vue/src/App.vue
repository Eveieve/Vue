<script>
export default {
  data() {
  return {
    counter : 0,
    user : {
    name: 'nanhee', 
    age: 20, 
    primaryColor : 'purple', 
    primaryStyle : 'italic',
  }
  }
  },
  watch : {
    counter(newValue, oldValue) {
      console.log(`Counter changed from ${oldValue} to ${newValue}`);
    },
    user : {
      handler(newVal, oldVal) {
        console.log("user object changed:", newVal);
      },
      deep: true
    }
  },
}
</script>
<template>
 <p>Counter: {{ counter }}</p>
 <button @click = "counter++">Increment</button>

 <p>Name: {{ user.name }}</p>
    <p>Age: {{ user.age }}</p>
    <button @click="user.age++">Increase Age</button>
  <h2 :style = "{primaryCol : primaryColor, fontStyle : primaryStyle}">inline style</h2>
  <h1>Internal style</h1>
</template>
<style scoped>
h1 {
  color: blue;
  font-style : italic;
}
@import '@/assets/main.css';
</style>