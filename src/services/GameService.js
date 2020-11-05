import { AppState } from '../AppState'
import utils from '../Utils/Generators'
import { api } from './AxiosService'
const _endpoint = 'games'
class GamesService {
  async createGame() {
    try {
      const res = await api.post(_endpoint, { name: 'test', code: utils.randomCode() })
      console.log('game created', res.data.data)
      return (res.data.data)
    } catch (error) {
      console.error(error)
    }
  }

  async joinGame(gameCode) {
    try {
      const moon = AppState.myMoon
      const res = await api.put(_endpoint + '/' + gameCode, moon)
      console.log('joined room data', res.data)
    } catch (error) {
      console.error(error)
    }
  }
}
export const gamesService = new GamesService()
