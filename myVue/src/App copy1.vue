<script>
export default {
  data() {
    return {
      id: 'writer', class: 'blue-color',
      visible: true, invisible: false,
      countries: ['france', 'germany', 'canada', 'italy'],
      user : {
        name: 'John',
        age: 28,
        gender: 'male',
      
      }
    };
  },
}
</script>
<template>
<div v-html="message"></div>
<div v-text="message"></div> 
<div v-pre>{{ message }}</div>
<h2 :class="className">Hello Blue User!</h2>
<h2 :id = "id":class="class">Welcome to the blue</h2>
<h2 :id :class>Say helllo to blue </h2>
<h1 v-if="visible">visible</h1>
<h1 v-if="invisible">visible</h1>

<h1>list of countries </h1>
<ul>
  <li v-for="(countries, index) in countries" :key="index">
    index : {{ index + 1 }}, value: {{ fruit }}
  </li>
<li v-for="(value, key,index) in user" :key="index">
  {{ index }} : {{ key }} : {{ value }}
</li>
</ul>
</template>
<style>
  .blue-color {
  color: blue;
}
</style>