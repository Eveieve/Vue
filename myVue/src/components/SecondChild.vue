<script>
export default {
    inject : ['message'],
}
</script>

<template>
   
    <p>this is a SecondChild Component</p>
    <div>{{ this.message }}</div>
</template>
<style scoped>
h1 {
    color : greenyellow;
}
p {
    color: pink;
}
</style>