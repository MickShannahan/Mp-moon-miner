<template>
  <div class="stats-panel rounded-lg crt row text-light p-2">
    <div class="col-12 border">
      <div class="row">
        <div class="col-12 text-center border-bottom">
          Moon stats
        </div>
        <h4 class="col-5 border-top border-right border-bottom">
          Cheese: {{ cheese }}
        </h4>
        <div class="col-7">
          the rest of the stats
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
export default {
  name: 'StatsPanel',
  setup() {
    const state = reactive({

    })

    return { state, cheese: computed(() => AppState.myMoon.cheese) }
  }
}
</script>

<style scoped>
.text-light{
  text-shadow:0px 0px 3px 2px  rgba(255, 235, 208, 0.582);
}
.stats-panel{
  border-radius: 2px;
  border:rgba(255, 205, 113, 0.959) solid 1px;
  box-shadow:inset 0px 0px 5px 5px  rgba(255, 176, 72, 0.432), 0px 0px 5px 5px  rgba(255, 176, 72, 0.432);
  position: absolute;
  right: 5vw;
  background-color: rgba(255, 183, 50, 0.349);
  min-width: 50vw;
  min-height: 25vh;
  transform: translateY(5vh);
}
</style>
