<template>
  <div class="Game container-fluid">
    <div class="row mt-5">
      <div class="col-4">
        <OtherMoon v-for="moon in otherMoons" :key="moon.id" :moon-data="moon" />
      </div>
      <div id="stats-hover" class="col-7">
        <MyMoon />
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, onMounted, reactive } from 'vue'
import { socketService } from '../services/SocketService'
import MyMoon from '../components/MyMoon'
import OtherMoon from '../components/OtherMoon'
import { useRoute } from 'vue-router'
import { gamesService } from '../services/GameService'
export default {
  name: 'Game',
  components: { MyMoon, OtherMoon },
  setup() {
    const route = useRoute()
    const state = reactive({
      roomNumber: route.params.gameCode,
      user: computed(() => AppState.user)

    })
    function joinGame() {
      if (state.user) {
        gamesService.joinGame(route.params.gameCode)
        socketService.joinRoom(state, route.params.gameCode)
      }
    }
    onMounted(() => {
      joinGame()
    })
    return {
      state,
      joinGame,
      otherMoons: computed(() => AppState.otherMoons)
    }
  }
}
</script>

<style scoped>

div{
  border: 1px red dotted;
}
</style>
