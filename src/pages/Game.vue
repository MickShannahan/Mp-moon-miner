<template>
  <div class="Game">
    welcome to the game
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
export default {
  name: 'Game',
  setup() {
    const state = reactive({

    })
    return { state }
  }
}
</script>

<style scoped>

</style>
