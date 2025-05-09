<script>
export default {
   
   inject : ['theme', 'user'], // 자식이 데이터를 받아오기 위해 

   created() {
    console.log('created!');

   },
   mounted() {
    console.log(this.theme); // 부모에게서 받은 것을 사용하기 
    console.log(this.user.name);
   }
}
</script>

<template>
    <!-- 최소한의 템플릿 없으면 렌더링 되지 않을 수도 있음  -->
    <div>User Profile</div> 
</template>