<template>
  <div class="nav-container container-fluid">
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light holo-panel-primary screen-bezel crt collapse">
      <router-link class="navbar-brand d-flex text-light" :to="{ name: 'Home' }">
        <div class="d-flex flex-column align-items-center">
        </div>
        <div>
          <h5 class="text-light barcode">
            Miner
          </h5>
        </div>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-if="game.id" :class="{ active: $route.name == 'Home' }">
            <router-link :to="{ name: 'Game' }" class="nav-link text-light barcode">
              Game
            </router-link>
          </li>
        </ul>
        <span class="navbar-text">
          <button class="btn btn-outline-success barcode" @click="login" v-if="!user.isAuthenticated">Login</button>

          <div class="dropdown" v-else>
            <div class="btn btn-outline-light barcode dropdown-toggle" @click="state.dropOpen = !state.dropOpen">
              <img :src="user.picture" alt="user photo" height="40" class="rounded" />
              <span class="mx-3">{{ user.name }}</span>
            </div>
            <div
              class="dropdown-menu p-0 list-group w-100"
              :class="{show: state.dropOpen}"
              @click="state.dropOpen = false"
            >
              <div class="list-group-item list-group-item-action hoverable" @click="logout">logout</div>
            </div>
          </div>
        </span>
      </div>
    </nav>
    <div class="row justify-content-end pr-5">
      <div class="col-1 p-2" style="border-radius:3px;" data-toggle="collapse" data-target="#navbar">
        <button class="btn btn-phys btn-info">
          navigation
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'

export default {
  name: 'Navbar',
  setup() {
    const state = reactive({
      dropOpen: false
    })

    return {
      state,
      user: computed(() => AppState.user),
      game: computed(() => AppState.game),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        await AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style scoped>

.nav-container{
  position: absolute;
}
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}

.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
</style>
