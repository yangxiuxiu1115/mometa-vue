<template>
  <div class="page">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="../assets/vue.svg" class="logo" alt="Vue logo" />
    </a>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
</script>

<style scoped lang="less">
.page {
  display: flex;
  height: 100%;
  a {
    flex: 1;
    .logo {
      height: 100%;
    }
  }
}
</style>
