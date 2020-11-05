<template>
  <div class="my-moon row justify-content-center">
    <img class="moon img-fluid" src="../assets/Moonsets/moons/cheese-moon.gif" alt="">
    <Satalite id="astronaut" class="img-fluid" />
    <div id="moon-click-area" class="d-flex justify-self-center align-self-center" @click="clickMoon"></div>
    <div id="stats-panel" class="col-1 d-flex align-items-end">
      <StatsPanel />
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { mineService } from '../services/MineService.js'
import Satalite from '../components/Satalite'
import StatsPanel from '../components/StatsPanel'
import { AppState } from '../AppState.js'
export default {
  name: 'MyMoon',
  components: { Satalite, StatsPanel },
  setup() {
    const state = reactive({

    })
    function clickMoon() {
      mineService.clickMoon()
    }
    return { state, clickMoon, game: computed(() => AppState.game) }
  }
}
</script>

<style scoped>
#astronaut{
position: fixed;
animation: satalite 20s infinite;
}

.moon{
  z-index: 1;
min-height: 100%;
user-select: none;
}
#moon-click-area{
  transform: translateY(-.5vh);
  z-index: 3;
  position: absolute;
  border-radius: 50%;
  width: 42vw;
  height: 42vw;
}

#moon-click-area:hover{
  animation: flicker 1s;
  border: 2px dashed whitesmoke;

}
#moon-click-area + #stats-panel{
  z-index: 10;
transform: scale(0,0) translate(-25vw,10vh);
transition: all .2s ease-in-out;
z-index: 10;
}
#moon-click-area:hover + #stats-panel{

transform: scale(1,1) translate(25vw, 0vh);
}
</style>
