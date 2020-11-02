<template>
  <div class="other-moon row">
    <div class="col-8 moon text-light">
      <img src="../assets/Moonsets/moons/swiss-moon.gif" class="img-fluid" alt="">
    </div>
    <div class="col-4">
      <div id="enemy-panel" class="row p-1 holo-panel-enemy rounded-lg crt">
        <div class="col-12 border-bottom text-center">
          {{ state.moon.user }}
        </div>
        <div class="col-12 mb-1 text-center">
          Cheese:{{ state.moon.cheese }}
        </div>
        <div class="col-12 text-center">
          <button class="btn btn-block btn-outline-light m-2 barcode" @click="targetMoon" data-toggle="modal" data-target="#sabotage-modal">
            sabotage
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive, onMounted } from 'vue'
import { sabotageService } from '../services/SabotageService.js'
export default {
  name: 'OtherMoon',
  props: ['moonData'],
  setup(props) {
    const state = reactive({
      moon: props.moonData
    })
    function targetMoon() {
      sabotageService.targetMoon(state.moon)
    }
    return { state, targetMoon }
  }
}
</script>

<style scoped>
.other-moon:hover .moon{
animation: float 7s infinite ease;
}

.btn:hover{
  animation: flicker;
}

#enemy-panel{
  transform: scale(0,0);
  transition: all .2s ease-in-out;
}

.other-moon:hover  div #enemy-panel {
transform: scale(1,1);
}

</style>
