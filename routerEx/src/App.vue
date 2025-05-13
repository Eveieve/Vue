<script setup>
import {RouterLink, RouterView} from 'vue-router';


</script>

<template>
<div id="app">
    <!-- 네비게이션 바 (선택) -->
    <nav>
      <RouterLink to="/">홈</RouterLink>
      <RouterLink to="/about">소개</RouterLink>
     
      <!-- 필요에 따라 링크 추가 -->
    </nav>

    <!-- 라우터 매칭된 컴포넌트를 여기에 렌더링 -->
    <RouterView/>
  </div>
</template>
    