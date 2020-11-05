<template>
  <div id="app" class="nebula-bg1 font-primary">
    <navbar />
    <router-view />
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
</style>
