<script>
import { MESSAGE_KEY} from '@/keys';
export default {
    inject : ['message', [MESSAGE_KEY]],
}
</script>

<template>

    <p>this is a SecondChild Component</p>
    <div>{{ this.message }}</div>
    <div>{{ MESSAGE_KEY}}</div>
</template>
<style scoped>
h1 {
    color : greenyellow;
}
p {
    color: pink;
}
</style>