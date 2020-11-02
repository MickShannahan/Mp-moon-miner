/* eslint-disable no-undef */
<template>
  <div class="sabotage-modal">
    <!-- Modal -->
    <div
      class="modal fade"
      id="sabotage-modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              time to sabotage {{ targetMoon.user }}'s moon
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              Add rows here
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive, onMounted, ref } from 'vue'
import $ from 'jquery'
export default {
  name: 'SabotageModal',
  setup(context) {
    const sabotageModal = ref(null)
    const state = reactive({
    })
    onMounted(() => {
      console.log(sabotageModal)
    })
    function closeModal() {
      $('#sabotage-modal').modal('toggle')
    }
    return { state, closeModal, sabotageModal, targetMoon: computed(() => AppState.targetMoon) }
  }
}
</script>

<style scoped>

</style>
