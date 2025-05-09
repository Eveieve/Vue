<script>
import UserProfile from './components/UserProfile.vue';
export default {

  components : { 
    UserProfile
  }, 

 provide() {
  return {
    theme: 'dark', 
    user: {
      name : 'John', 
      role :  'admin'
    }
  }
 }
}

</script>
<template>
  <UserProfile></UserProfile>
   
</template>
<style scoped>
 
</style>