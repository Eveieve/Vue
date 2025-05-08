<script>
import UserProfile from './components/UserProfile.vue';
export default {

  components : { 
    UserProfile
  }, 

  data() {
    return {
      userName : 'John Mayer',
      age : 25,
      phone : "",
      address : "",
    };
  }
}


</script>


<template>
  <h1>회원가입</h1>
    <input v-model="userName" placeholder="name" />
    <input v-model.number="age" type="number" placeholder="age" />
    <input v-model="address" placeholder="address" />
    <input v-model="phone" placeholder="phone" />
  <!-- giving data to props 'name', and 'age' -->
  <UserProfile :name = "userName" :phone = "phone" :address="address"/> 
</template>
<style scoped>
 
</style>