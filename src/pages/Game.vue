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
import { computed, reactive } from 'vue'
import MyMoon from '../components/MyMoon'
import OtherMoon from '../components/OtherMoon'
export default {
  name: 'Game',
  components: { MyMoon, OtherMoon },
  setup() {
    const state = reactive({

    })
    return { state, otherMoons: computed(() => AppState.otherMoons) }
  }
}
</script>

<style scoped>

div{
  border: 1px red dotted;
}
</style>
