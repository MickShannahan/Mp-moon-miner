import { reactive } from 'vue'
const moon1 = {
  id: 1,
  cheese: 12,
  user: 'other Daryl',
  upgrades: [
    {
      name: 'spy',
      cost: 500
    },
    {
      name: 'missle',
      cost: 1000
    },
    {
      name: 'space&time tracker',
      cost: 'bazillion'
    }],
  img: '../assets/Moonsets/moons/mozz-moon.gif'
}
const moon2 = {
  id: 2,
  cheese: 12,
  user: 'other Tim',
  upgrades: [
    {
      name: 'spy',
      cost: 500
    },
    {
      name: 'inter-planetary missle',
      cost: 1000
    }, {
      name: 'fa-spin to win',
      cost: 500
    }],
  img: '../assets/Moonsets/moons/blue-moon.gif'

}
const moon3 = {
  id: 3,
  cheese: 1200,
  user: 'other Mick',
  upgrades: [
    {
      name: 'spy',
      cost: 500
    },
    {
      name: 'inter-planetary missle',
      cost: 1000
    },
    { name: 'rodent infestation', cost: 750 }],
  img: '../assets/Moonsets/moons/swiss-moon.gif'

}
export const AppState = reactive({
  game: {},
  myMoon: { cheese: 0 },
  otherMoons: [moon1, moon2, moon3],
  user: {},
  profile: {},
  targetMoon: {}
})

// NOTE Getters are used for repeated computeds
export const Getters = {}
