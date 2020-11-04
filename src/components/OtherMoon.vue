<template>
  <div class="other-moon row">
    <SabotageModal :id="'sabotage-modal-' + state.moon.id">
      <template #head>
        <h2 class="text-centered p-4">
          Sabotage {{ state.moon.user }}'s moon
        </h2>
      </template>
      <template #body>
        <div class="row">
          <div v-for="button in state.moon.upgrades" :key="button.name" class="p-1">
            <button class="btn btn-outline-danger">
              {{ button.name }} {{ button.cost }}
            </button>
          </div>
        </div>
      </template>
      <template #footer>
        <button type="button" class="btn btn-outline-warning w-50 text-center" @click="closeModal">
          Close
        </button>
      </template>
    </SabotageModal>
    <div class="col-8 moon text-light">
      <img src="../assets/Moonsets/moons/swiss-moon.gif" class="img-fluid" alt="">
    </div>
    <div class="col-4">
      <div id="enemy-panel" class="row p-1 holo-panel-enemy rounded-lg crt align-content-center">
        <div class="col-12 border-bottom text-center">
          {{ state.moon.user }}
        </div>
        <div class="col-12 mb-1 text-center">
          Cheese:{{ state.moon.cheese }}
        </div>
        <div class="col-12 text-center">
          <button class="btn btn-block btn-outline-light m-2 barcode"
                  type="button"
                  @click="targetMoon"
                  data-toggle="modal"
                  :data-target="'#sabotage-modal-'
                    +
                    state.moon.id"
          >
            sabotage
          </button>
        </div>
        <div class="col-12 holo-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import SabotageModal from './SabotageModal'
import { sabotageService } from '../services/SabotageService.js'
import $ from 'jquery'
export default {
  name: 'OtherMoon',
  props: ['moonData'],
  components: { SabotageModal },
  setup(props) {
    const state = reactive({
      moon: props.moonData
    })
    function targetMoon() {
      sabotageService.targetMoon(state.moon)
    }
    function closeModal() {
      console.log('this is the other moon')
      $('#sabotage-modal-' + state.moon.id).modal('toggle')
    }
    return { state, targetMoon, closeModal }
  }
}
</script>

<style scoped>
.holo-line{
  border-bottom: 1px solid rgb(253, 226, 226);
  box-shadow:0px 0px 5px 5px  rgba(252, 97, 97, 0.753) ;
  transform: translate(-11vw, 5px);
}
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
