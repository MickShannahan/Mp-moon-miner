/* eslint-disable no-undef */
<template>
  <div class="sabotage-modal">
    <!-- Modal -->
    <div
      class="modal fade"
      :id="id"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content holo-panel-sabotage crt">
          <div class="modal-header">
            <div class="modal-title">
              <slot name="head">
              </slot>
            </div>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot name="body" class="container-fluid">
              Add rows here
            </slot>
          </div>
          <slot name="footer" class="modal-footer">
            <button type="button" class="btn btn-outline-warning w-50 text-center" @click="closeModal">
              Close
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import $ from 'jquery'
export default {
  name: 'SabotageModal',
  props: ['id'],
  setup(props) {
    const state = reactive({
    })

    function closeModal() {
      $('#' + props.id).modal('toggle')
    }

    return { state, closeModal }
  }
}
</script>

<style scoped>

</style>
