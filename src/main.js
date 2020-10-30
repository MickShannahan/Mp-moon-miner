import bootstrap from 'bootstrap'
import corejs from 'core-js'
import jquery from 'jquery'
import popper from 'popper.js'
import { createApp } from 'vue'
import App from './App.vue'
import { AppState } from './AppState'
import './AuthConfig'
import router from './router'

createApp(App, {
  AppState
})
  .use(router, popper, jquery, corejs, bootstrap)
  .mount('#app')
