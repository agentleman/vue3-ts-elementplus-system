<template>
  <router-view />

</template>

<script setup lang="ts">

</script>

<style >
@import './assets/css/main.css';
@import './assets/css/color-dark.css';
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
} */

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
