import { reactive } from 'vue'
const moon1 = {
  cheese: 12,
  user: 'other Daryl',
  upgrades: {}
}
const moon2 = {
  cheese: 12,
  user: 'other Tim',
  upgrades: {}
}
const moon3 = {
  cheese: 1200,
  user: 'other Mick',
  upgrades: {}
}
export const AppState = reactive({
  myMoon: { cheese: 0 },
  otherMoons: [moon1, moon2, moon3],
  user: {},
  profile: {}
})

// NOTE Getters are used for repeated computeds
export const Getters = {}
