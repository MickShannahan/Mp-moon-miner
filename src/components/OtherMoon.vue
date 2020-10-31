<template>
  <div class="other-moon row">
    <div class="col-12 text-light">
    {{state.moon}}
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
    onMounted(() => console.log(state.moon))
    return { state }
  }
}
</script>

<style scoped>

</style>
