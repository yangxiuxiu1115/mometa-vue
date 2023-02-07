<script setup lang="ts">
</script>

<template>
  <a-layout class="layout" :style="{ height: '100%' }">
    <a-layout-header>
      <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item key="1">
          <router-link to="/page">page</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/home">home</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content>
      <router-view></router-view>
    </a-layout-content>
    <a-layout-footer style="text-align: center"> Ant Design ©2018 Created by Ant UED </a-layout-footer>
  </a-layout>
</template>

<style scoped></style>
