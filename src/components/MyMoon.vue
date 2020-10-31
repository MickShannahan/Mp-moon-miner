<template>
  <div class="my-moon row justify-content-center">
    <img class="moon img-fluid" src="../assets/Moonsets/moons/cheese-moon.gif" alt="">
    <div id='moon-click-area' class="d-flex justify-self-center align-self-center" @click="clickMoon"></div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
import { mineService } from '../services/MineService.js'
export default {
  name: 'my-moon',
  setup() {
    const state = reactive({

    })
    function clickMoon() {
      mineService.clickMoon()
    }
    return { state, clickMoon }
  }
}
</script>

<style scoped>
.moon{
min-height: 100%;
user-select: none;
}
#moon-click-area{
  transform: translateY(-.5vh);
  z-index: 10;
  position: absolute;
  border-radius: 50%;
  width: 42vw;
  height: 42vw;
}

#moon-click-area:hover{
  animation: flicker 1s;
  border: 2px dashed whitesmoke;

}
</style>
