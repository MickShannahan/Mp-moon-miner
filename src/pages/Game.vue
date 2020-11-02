<template>
  <div class="Game container-fluid">
    <div class="row mt-5">
      <div class="col-4">
        <OtherMoon v-for="moon in otherMoons" :key="moon.user" :moonData='moon'></OtherMoon>
      </div>
      <div id="stats-hover" class="col-7">
        <MyMoon/>
      </div>
      <div id="stats-panel" class="col-1 d-flex align-items-end">
        <StatsPanel/>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
import MyMoon from '../components/MyMoon'
import OtherMoon from '../components/OtherMoon'
import StatsPanel from '../components/StatsPanel'
export default {
  name: 'Game',
  components: { MyMoon, StatsPanel, OtherMoon },
  setup() {
    const state = reactive({

    })
    return { state, otherMoons: computed(() => AppState.otherMoons) }
  }
}
</script>

<style scoped>
#stats-hover + #stats-panel{
transform: scale(0,0);
}
#stats-hover:hover + #stats-panel{
animation: holo-open .5s;
 animation-fill-mode: both;
transform: scale(1,1);
}
div{
  border: 1px red dotted;
}
</style>
