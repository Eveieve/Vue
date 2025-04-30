<script>
export default {

 
    methods : { // define methods here 
    clickHandler() {
      alert('click!');
    },

    dbclickHandler() {
      alert('dbclick');
    }
    },
  
}
</script>
<template>
<!-- <button type="button" v-on:click="clickHandler">click</button>
<button type="button" v-on:dbclick="clickHandler">dbclick</button> -->
<button type="button" @click="clickHandler">click</button>

</template>
<style>
  .blue-color {
  color: blue;
}
</style>