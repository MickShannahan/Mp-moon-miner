<template>
  <div id="app" class="nebula-bg1 font-primary">
    <navbar />
    <router-view v-if="appstate.user.email" />
    <div v-else class="centered text-light container-fluid">
      <div class="row p-4 ">
        <div class="col-5 border p-4">
          Please log in or create an account in Navigation
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar'
import { socketService } from './services/SocketService'

export default {
  name: 'App',
  setup() {
    onMounted(() => {
      socketService.initializeSocket()
    })
    return { appstate: computed(() => AppState) }
  },
  components: {
    Navbar
  }
}
</script>
<style lang="scss">
@import "./assets/_variables.scss";
@import "bootstrap";
@import "./assets/_overrides.scss";
@import url("https://use.fontawesome.com/releases/v5.13.1/css/all.css");
</style>
