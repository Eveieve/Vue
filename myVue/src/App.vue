<script>
export default {

  data(){
    return {
        number : 0,
    };
  },
 
    methods : { // define methods here 
      onkeyHandler() {
  
        console.log('this is an enter key');
      },

      increment() {
        // 'this' is the button event
        this.number++;
      }
    },
  
}
</script>
<template>
<!-- <input type="text" @keyup="($event) => onkeyupHandler($event)">
<input type="text" @keyup.enter = "onkeyupHandler"> -->
<h1>{{ number }}</h1>
<button type="button" @click="increment">increment!</button>
</template>
<style>
  .blue-color {
  color: blue;
}
</style>