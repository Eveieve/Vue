<script>
export default {
  data() {
    return {
      firstName: 'Nanhee ',
      lastName: 'Jeong',
      selectItem: 'latte',
      message: '', 
    
    };
  },
  methods : {
      login() {
          console.log()
      },

      printData() {
        console.log(this.selectItem);
      },

      onChangeHandler($event) {
        this.message = $event.target.value;
      }
  },
  computed: { // 내부에서 항상 데이터 참조
      fullName() {
        console.log('computed fullname');
        return `${this.lastName} ${this.firstName}`;
      }
  }
}
</script>
<template>
  <!-- 양방향 연결   -->
<!-- <input type="text" v-model="message"/> {{ message }} -->
<input type="text" @input="onChangeHandler($event)"/> {{ message }}
{{ fullName }}
</template>