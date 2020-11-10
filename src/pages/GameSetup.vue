<template>
  <div class="CreateMoon container-fluid text-light">
    <div v-if="!state.game.code" class=" justify-content-center row text-light">
      <input v-model="state.gameName"
             type="text"
             class="form-control centered border bg-transparent text-light col-6"
             placeholder="enter the game's name..."
      >
      <button class=" centered col-2 btn btn-outline-light" @click="createGame">
        submit
      </button>
      <small class="centered col-12 text-center">enter the name of the game</small>
    </div>
    <div v-if="state.game.code" class="row justify-content-center">
      <div class="col-6">
        <div class="btn-group col-6 centered" role="group" aria-label="">
          <div class="btn-group" role="group">
            <button id="dropdownId"
                    type="button"
                    class="btn btn-outline-light dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
            >
              Pick your moon
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
              <div v-for="moon in state.moonChoices" :key="moon.name" class="dropdown-item" href="#"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { computed, reactive } from 'vue'
import { gamesService } from '../services/GameService'
import { AppState } from '../AppState'
export default {
  name: 'CreateMoon',
  setup() {
    const state = reactive({
      stage: 0,
      gameName: '',
      game: computed(() => AppState.game),
      moonChoices: [{
        name: 'cheese',
        img: ''
      }]

    })
    function createGame() {
      gamesService.createGame(state.gameName)
    }
    return { state, createGame }
  }
}
</script>

<style scoped>

</style>
