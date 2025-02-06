<template class="flex flex-col justify-center">
  <main
    class="w-full flex flex-col items-center ml-auto mr-auto transition-all duration-75 bg-black"
    :class="[
      { 'anim-go': startLights, '': !startLights },
    ]"
  >
    <img
      src="/20241024_smoke01.jpg"
      class="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
      :class="{ 'hidden': isGallery }"
    />

    <div
      class="absolute top-[10%] w-full text-center sp-light text-xl text-g8"
      :class="[
        { 'bloc': !startLights, 'hidden': startLights }
      ]"
    >
      <p>So simple yet so hard: to stop, to breathe in the fresh air,</p>
      <p>to feel the wind and the rain, to smell the pines, the moss, the sea.</p>
      <p class="pt-5">Open your eyes, savour every image, for it is life’s purest gift.</p>
    </div>

    <!-- Black transition -->
    <div
      class="trans absolute w-full h-full translate-x-[-50%] translate-y-[-50%] hidden bg-g1 z-10"
    ></div>

    <!-- Spinner -->
    <div
      class="spinner anim-rotation"
      :class="[
        { 'stop-spinner': goBtnPressed, '': !goBtnPressed },
        ]"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- Go button-->
    <div
      @mousedown="goBtnPressed = true"
      @mouseup="[ goBtnPressed = false, startLights = true, handleLightStart() ]"
      @mouseleave="goBtnPressed = false"
      :class="[
        { 'bounce': goBtnPressed, '': !goBtnPressed },
        ]"
      class="btn btn-go absolute top-[50%] left-[50%] w-[300px] h-[300px] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center cursor-pointer text-center flex-col"
    >
      <p class="sp-light text-5xl">Step in</p>
    </div>

    <!-- Northern lights -->
    <div
      ref="nightSky"
      class="openning h-[100vh] w-[100vw]"
      :class="[
        { 'block': lightsOpen, 'hidden': !lightsOpen },
        { 'anim-fade_out': mountainGo, '': !mountainGo },
      ]"
    >
    <!-- Text -->
      <div
        @mouseenter="mountainUp = true"
        @mouseleave="mountainUp = false"
        @click="[ mountainGo = true, handleLightOut(), isGallery = true ]"
        class="w-full absolute left-[50%] h-[400px] translate-x-[-50%] z-20 flex flex-col justify-center text-center cursor-pointer transition-all duration-500"
        :class="{ 'bottom-[-60px] gap-5': mountainUp, 'bottom-[-110px] gap-10': !mountainUp }"
      >
        <div class="mt-[40px]">
          <p class="text-l text-light sp-light">We draw, we paint, we sculpt, we try to capture the beauty that surrounds us</p>
          <p class="text-l text-light sp-light ">Yet nothing we create can ever compare to what simply is</p>
        </div>
        <p class="text-xl text-light sp-light tracking-widest">Step closer ...</p>
        <p class="text-xl text-light sp-light tracking-widest">One last step</p>
      </div>

      <!-- Rope 1 -->
      <svg class="svg" viewBox="0 0 100 300">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#04D1CB" />
            <stop offset="75%" stop-color="#6CD2C3" />
            <stop offset="100%" stop-color="#ADCD92" />
          </linearGradient>
          <linearGradient id="waveGradientAlternative" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#29135D" />
            <stop offset="50%" stop-color="#29135D" />
            <stop offset="55%" stop-color="#692A90" />
            <stop offset="60%" stop-color="#692A90" />
            <stop offset="100%" stop-color="#12074C" />
          </linearGradient>
        </defs>
        <path
          stroke="url(#waveGradient)"
          d="M100,0 C30,150 -100,150 25,300"
        />
        <path
          stroke="url(#waveGradient)"
          d="M100,0 C30,150 -100,150 25,300"
        />
        <path
          stroke="url(#waveGradient)"
          d="M100,0 C30,150 -100,150 25,300"
        />
        <path
          stroke="url(#waveGradient)"
          d="M100,0 C30,150 -100,150 25,300"
        />
        <path
          stroke="url(#waveGradientAlternative)"
          d="M100,0 C30,150 -100,150 25,300"
        />
        <path
          stroke="url(#waveGradientAlternative)"
          d="M100,0 C30,150 -100,150 25,300"
        />
      </svg>

      <!-- Rope 2 -->
      <svg class="svg" viewBox="0 0 100 300">
        <defs>
          <linearGradient id="waveGradientAlternative2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#29135D" />
            <stop offset="20%" stop-color="#692A90" />
            <stop offset="25%" stop-color="#29135D" />
            <stop offset="50%" stop-color="#12074C" />
            <stop offset="62%" stop-color="#692A90" />
            <stop offset="67%" stop-color="#12074C" />
            <stop offset="100%" stop-color="#12074C" />
          </linearGradient>
        </defs>
        <path
          stroke="url(#waveGradient)"
          d="M300,-10 C150,150 -1,110 50,300"
        />
        <path
          stroke="url(#waveGradient)"
          d="M300,-10 C150,150 -1,110 50,300"
        />
        <path
          stroke="url(#waveGradient)"
          d="M300,-10 C150,150 -1,110 50,300"
        />
        <path
          stroke="url(#waveGradient)"
          d="M300,-10 C150,150 -1,110 50,300"
        />
        <path
          stroke="url(#waveGradientAlternative2)"
          d="M300,-10 C150,150 -1,110 50,300"
        />
        <path
          stroke="url(#waveGradientAlternative2)"
          d="M300,-10 C150,150 -1,110 50,300"
        />
      </svg>

      <!-- Rope 3 -->
      <svg class="svg" viewBox="0 0 100 300">
        <defs>
          <linearGradient id="waveGradientAlternative3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#29135D" />
            <stop offset="20%" stop-color="#29135D" />
            <stop offset="30%" stop-color="#692A90" />
            <stop offset="40%" stop-color="#12074C" />
            <stop offset="100%" stop-color="#12074C" />
          </linearGradient>
        </defs>
        <path
          stroke="url(#waveGradient)"
          d="M-50,0 C0,150 -200,110 -50,300"
        />
        <path
          stroke="url(#waveGradient)"
          d="M-50,0 C0,150 -200,110 -50,300"
        />
        <path
          stroke="url(#waveGradient)"
          d="M-50,0 C0,150 -200,110 -50,300"
        />
        <path
          stroke="url(#waveGradient)"
          d="M-50,0 C0,150 -200,110 -50,300"
        />
        <path
          stroke="url(#waveGradientAlternative3)"
          d="M-50,0 C0,150 -200,110 -50,300"
        />
        <path
          stroke="url(#waveGradientAlternative3)"
          d="M-50,0 C0,150 -200,110 -50,300"
        />
      </svg>

      <!-- Rope 4 -->
      <svg class="svg" viewBox="0 0 100 300">
        <defs>
          <linearGradient id="waveGradientAlternative4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#29135D" />
            <stop offset="70%" stop-color="#29135D" />
            <stop offset="75%" stop-color="#692A90" />
            <stop offset="90%" stop-color="#12074C" />
            <stop offset="100%" stop-color="#12074C" />
          </linearGradient>
        </defs>
        <path
          stroke="url(#waveGradient)"
          d="M400,50 C900,150 0,110 200,300"
        />
        <path
          stroke="url(#waveGradient)"
          d="M400,50 C900,150 0,110 200,300"
        />
        <path
          stroke="url(#waveGradient)"
          d="M400,50 C900,150 0,110 200,300"
        />
        <path
          stroke="url(#waveGradient)"
          d="M400,50 C900,150 0,110 200,300"
        />
        <path
          stroke="url(#waveGradientAlternative4)"
          d="M400,50 C900,150 0,110 200,300"
        />
        <path
          stroke="url(#waveGradientAlternative4)"
          d="M400,50 C900,150 0,110 200,300"
        />
      </svg>

      <!-- Horizon -->
      <div
        class="mountains absolute z-10 left-0 bottom-0 w-full transition-all duration-500"
        :class="[
          { 'h-[500px]': mountainUp, 'h-[400px]': !mountainUp },
          { 'anim': mountainGo, '': !mountainGo },
        ]"
      ></div>
    </div> 
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const colors = ['g8', 'light', '#692A90', '#29135D', '#04D1CB', '#6CD2C3', '#ADCD92']
const goBtnPressed = ref(false)
const startLights = ref(false)
const lightsOpen = ref(false)
const nightSky = ref(null)
const mountainUp = ref(false)
const mountainGo = ref(false)
const isGallery = ref(false)

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)]
}

const handleLightStart = () => {
  setTimeout(() => {
    lightsOpen.value = true
    createStars(150)
  }, 1000)
}

const createStars = (numStars) => {
  if (!nightSky.value) return

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div')
    star.classList.add('star')
    
    // Taille
    const size = Math.random() + 1 + 'px'
    star.style.width = size
    star.style.height = size
    
    // Position
    const xPosition = Math.random() * window.innerWidth + 'px'
    const yPosition = Math.random() * window.innerHeight + 'px'
    star.style.left = xPosition
    star.style.top = yPosition

    // Couleur
    star.style.backgroundColor = getRandomColor()
    star.style.zIndex = -1
    
    nightSky.value.appendChild(star)
  }
}

const handleLightOut = () => {
  mountainGo.value = true
  setTimeout(() => {
    lightsOpen.value = false
    router.push({ name: 'home' })
  }, 500)
}

</script>

<style lang="scss">

// Landing page btn
main {
  &.anim-go {
    .spinner {
      animation: hide_spinner 0.5s linear forwards;
    }
    .trans {
      display: block;
      animation: show_trans 2s ease-in forwards;
      transition: background-color 0.5s ease-out, filter 0.5s ease-out;
    }
    .btn-go {
      transform: all 0.5s ease-in;
      width: 0px;
      height: 0px;
      display: none;
    }
  }
}
.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  height: 400px;
  width: 400px;
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
      filter: blur(2px);
    }
    &:nth-of-type(2) {
      filter: blur(5px);
    }
    &:nth-of-type(3) {
      filter: blur(10px);
    }
    &:nth-of-type(4) {
      filter: blur(25px);
    }
  }
  &::after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    background: theme('colors.g4');
    border-radius: 50%;
  }
}

.bounce {
  p {
    transition: all 0.05s ease-in-out;
    transform: scale(0.95)
  }
}

// Northern lights
.openning {
  z-index: 5;
  height: 100vh;
  width: 100vw;
  background: theme('colors.gradientNight');
  opacity: 0.5;
}

.svg {
  position: absolute;
  width: 100vw;
  height: calc(100vh - 200px);
  left: 50%;
  transform: translateX(-50%);
  fill: none;
  path {
    stroke-linecap: round;
    fill: none;
    &:nth-of-type(1) {
      stroke-width: 2;
      filter: blur(1px);
      transform: translateY(-10px);
    }
    &:nth-of-type(2) {
      stroke-width: 3;
      filter: blur(2px);
      transform: translateY(-12px);
    }
    &:nth-of-type(3) {
      stroke-width: 5;
      filter: blur(4px);
      transform: translateY(-15px);
    }
    &:nth-of-type(4) {
      stroke-width: 5;
      filter: blur(7px);
      transform: translateY(-20px);
    }
    &:nth-of-type(5) {
      stroke-width: 5;
      filter: blur(10px);
      transform: translateY(-23px);
    }
    &:nth-of-type(6) {
      stroke-width: 20;
      filter: blur(15px);
      transform: translateY(-35px);
    }
  }
  &:nth-of-type(1) path {
    animation: light_wave_path1 10s linear infinite;
  }
  &:nth-of-type(2) path {
    animation: light_wave_path2 10s linear infinite;
  }
  &:nth-of-type(3) path {
    animation: light_wave_path3 10s linear infinite;
  }
  &:nth-of-type(4) path {
    animation: light_wave_path4 10s linear infinite;
  }
}

.star {
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  opacity: 0.8;
  animation: blink 2s infinite alternate, move 10s linear infinite;
}

.mountains {
  background: theme('colors.gradientMount');
  clip-path: polygon(0% 40%, 5% 30%, 10% 20%, 15% 30%, 20% 20%, 25% 40%, 35% 30%, 40% 40%, 50% 25%, 60% 40%, 70% 35%, 75% 40%, 85% 25%, 90% 40%, 100% 30%, 100% 100%, 0% 100%);
  &.anim {
    animation: anim_mountain 3s linear forwards;
  }
}

.anim-fade_out {
  animation: fade_out 1s ease-in-out forwards;
}

//// Animations ////

// Landing page btn
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
    width: 10px;
    height: 10px;
  }
}

@keyframes show_trans {
  0% {
    filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.9);
    opacity: 0;
    top: 50%;
    left: 50%;
    height: 100vh;
    width: 100vw;
  }
  25% {
    filter: blur(0px);
    background-color: rgba(0, 0, 0, 1);
    opacity: 1;
    height: 110vh;
    width: 110vw;
  }
  35% {
    filter: blur(10px);
    background-color: rgba(0, 0, 0, 1);
    opacity: 1;
    height: 110vh;
    width: 110vw;
  }
  99% {
    display: block;
  }
  100% {
    filter: blur(0px);
    background-color: rgba(0, 0, 0, 0);
    opacity: 1;
    top: 50%;
    left: 50%;
    width: 100vw;
    width: 100vw;
    display: none;
  }
}

// Northern lights
@keyframes light_wave_path1 {
  5% {
    d: path('M100,0 C30,150 -100,150 25,300');
  }
  25% {
    d: path('M110,0 C50,110 -100,150 20,300');
  }
  45% {
    d: path('M120,0 C70,70 -100,150 15,300');
  }
}
@keyframes light_wave_path2 {
  5% {
    d: path('M300,-10 C150,150 -1,110 50,300');
  }
  25% {
    d: path('M310,-10 C170,110 -1,110 45,300');
  }
  45% {
    d: path('M320,-10 C190,70 -1,110 40,300');
  }
}
@keyframes light_wave_path3 {
  5% {
    d: path('M-50,0 C0,150 -200,110 -50,300');
  }
  25% {
    d: path('M-60,0 C10,150 -200,110 -45,300');
  }
  45% {
    d: path('M-70,0 C20,150 -200,110 -40,300');
  }
}
@keyframes light_wave_path4 {
  5% {
    d: path('M400,50 C900,150 0,110 200,300');
  }
  25% {
    d: path('M410,50 C900,170 0,110 195,300');
  }
  45% {
    d: path('M420,50 C900,190 0,110 190,300');
  }
}

@keyframes anim_mountain {
  0% {
    clip-path: polygon(0% 10%, 10% 0%, 15% 30%, 20% 20%, 25% 40%, 35% 30%, 40% 40%, 50% 25%, 60% 40%, 70% 35%, 75% 40%, 85% 25%, 90% 40%, 100% 30%, 100% 100%, 0% 100%);
  }
  70% {
    clip-path: polygon(0% 0%, 10% 0%, 20% 0%, 30% 0%, 40% 0%, 50% 0%, 60% 0%, 70% 0%, 80% 0%, 90% 0%, 100% 0%, 100% 100%, 0% 100%);
    transform: scale(20, 30);
    opacity: 1;
  }
  90% {
    opacity: 0;
    transform: scale(20, 30);
  }
  100% {
    opacity: 0;
    display: none;
    transform: scale(20, 30);
  }
}

@keyframes fade_out {
  from {
    opacity: 1;
    filter: blur(0);
  }
  to {
    opacity: 0.5;
    filter: blur(90px);
  }
}

</style>
