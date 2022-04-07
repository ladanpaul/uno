<script setup lang="ts"></script>

<template>
  <div class="wrapper flex flex-col items-center">
    <RouterView />
    <footer class="absolute bottom-4 right-4 text-dark-gray">Pavel L.</footer>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  background: rgba(#d2d5d8, 0.2);
  min-height: 100vh;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("@/assets/img/uno_landing.jpg") center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.2;
    z-index: -1;
  }
}
</style>
