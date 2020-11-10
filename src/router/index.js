import { createRouter, createWebHashHistory } from 'vue-router'
import GameSetup from '../pages/GameSetup'
import Home from '../pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gamesetup',
    name: 'GameSetup',
    component: GameSetup
  },
  {
    path: '/games/:gameCode',
    name: 'Game',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "game" */ '../pages/Game.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
