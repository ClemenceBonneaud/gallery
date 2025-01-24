<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="text-light font-sulphur">
    <RouterView />
  </div>
</template>

<style lang="scss">
:root {
  height: 100vh;
  width: full;
  background: theme('colors.gradient');
}

.sp-light {
  font-family: "Sulphur Point", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.sp-regular {
  font-family: "Sulphur Point", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.sp-bold {
  font-family: "Sulphur Point", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.btn {
  border-radius: 50%;
  background: linear-gradient(145deg, #3c3748, #322e3c);
  box-shadow:  4px 4px 16px #16141b,
              -4px -4px 16px #5a526b;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: linear-gradient(145deg, #322e3c, #3c3748);
  }
  &.active {
    box-shadow: inset 4px 4px 16px #16141b,
                inset -4px -4px 16px #5a526b;
  }
}

</style>
