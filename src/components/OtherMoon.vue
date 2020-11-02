<template>
  <div class="other-moon row">
    <div class="col-8 text-light">
    <img src='../assets/Moonsets/moons/swiss-moon.gif' class="img-fluid" alt="">
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive, onMounted } from 'vue'
export default {
  name: 'other-moon',
  props: ['moonData'],
  setup(props) {
    const state = reactive({
      moon: props.moonData
    })
    onMounted(() => console.log(state.moon.img))
    return { state }
  }
}
</script>

<style scoped>

</style>
