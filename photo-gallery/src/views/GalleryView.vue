<template class="flex flex-col justify-center">
  <main
    class="w-[90%] flex flex-col items-center ml-auto mr-auto bg-white"
    :class="[
      { 'anim-go': goTime, '': !goTime },
    ]"
  >
    <div
      class="trans-cercle absolute top-[50%] left-[50%] rounded-[50%] w-[0px] h-[0px] translate-x-[-50%] translate-y-[-50%] hidden bg-g1"
    ></div>
    <div
      class="spinner anim-rotation"
      :class="[
        { 'stop-spinner': isPressed, '': !isPressed },
        ]"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div
      @mousedown="isPressed = true"
      @mouseup="[ isPressed = false, goTime = true ]"
      @mouseleave="isPressed = false"
      :class="[
        { 'active bounce': isPressed, '': !isPressed },
        ]"
      class="btn btn-go absolute top-[50%] left-[50%] w-[250px] h-[250px] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center cursor-pointer"
    >
      <p class=" text-6xl text-light opacity-50 sp-bold drop-shadow-md">GO</p>
    </div>
    
  </main>
</template>

<script setup>
import { ref } from 'vue'

const isPressed = ref(false)
const goTime = ref(false)

</script>

<style lang="scss">
main.anim-go {
  .spinner {
    animation: hide_spinner 0.5s ease-in forwards;
  }
  .trans-cercle {
    display: block;
    animation: show_trans 0.5s ease-in forwards;
    animation-delay: 0.5s;
  }
  .btn-go {
    transform: all 0.5s ease-in;
    width: 0px;
    height: 0px;
    display: none;
  }
}

.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  height: 600px;
  width: 600px;
  background: linear-gradient(theme('colors.g3'), theme('colors.g6'), theme('colors.g7'), theme('colors.light'));
  filter: blur(1px);
  box-shadow: 0px -5px 20px 0px theme('colors.g3'), 0px 5px 20px 0px theme('colors.g7'), theme('colors.light');
  transform: translate(-50%, -50%);
  &.anim-rotation {
    animation: rotate_spinner 3s linear infinite;
  }
  &.stop-spinner {
    & span {
      transition: transform 0.5s ease-in;
      transform: scale(0.5);
    }
    &::after {
      top: 1px;
      left: 1px;
      right: 1px;
      bottom: 1px;
    }
  }
  & span {
    position: absolute;
    border-radius: 50%;
    height: 100%;
    width: 100%;
    background: linear-gradient(theme('colors.g5'), theme('colors.g7'), theme('colors.g8'), theme('colors.light'));
    &:nth-of-type(1) {
      filter: blur(5px);
    }
    &:nth-of-type(2) {
      filter: blur(10px);
    }
    &:nth-of-type(3) {
      filter: blur(25px);
    }
    &:nth-of-type(4) {
      filter: blur(50px);
    }
  }
  &::after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    background: radial-gradient(theme('colors.g5') 55%, theme('colors.g3') 100%);
    border-radius: 50%;
  }
}

.bounce p {
  transition: all 0.05s ease-in-out;
  transform: scale(0.95)
}

@keyframes rotate_spinner {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes hide_spinner {
  0% {
    height: 600px;
    width: 600px;
  }
  99% {
    width: 10px;
    height: 10px;
  }
  100% {
    display: none;
  }
}

@keyframes show_trans {
  0% {
    width: 0px;
    height: 0px;
  }
  100% {
    width: 150vw;
    height: 150vw;
  }
}

</style>
