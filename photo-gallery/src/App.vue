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
  background: linear-gradient(145deg, #23222a, #1e1d23);
  box-shadow:  4px 4px 16px #1c1b21,
              -4px -4px 16px #26252d;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: linear-gradient(145deg, #1e1d23, #23222a);
  }
  &.active {
    box-shadow: inset 4px 4px 16px #1c1b21,
                inset -4px -4px 16px #26252d;
  }
}

</style>
