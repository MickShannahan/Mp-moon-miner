<template>
  <div id="app" class="nebula-bg1 font-primary">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar'

export default {
  name: 'App',
  setup() {
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
