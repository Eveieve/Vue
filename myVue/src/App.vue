<script>
import UserProfile from './components/UserProfile.vue';
import {THEME_KEY, USER_KEY} from '@/keys';

export default {

  components : { 
    UserProfile, 
  }, 

 provide() {
  return {
  [THEME_KEY]: 'dark', 
    [USER_KEY]: {
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