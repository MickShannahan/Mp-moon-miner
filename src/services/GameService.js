import { AppState } from '../AppState'
import utils from '../Utils/Generators'
import { api } from './AxiosService'
const _endpoint = 'games'
class GamesService {
  async createGame(gameName) {
    try {
      const res = await api.post(_endpoint, { name: gameName, code: utils.randomCode() })
      console.log('game created', res.data.data)
      AppState.game = res.data.data
    } catch (error) {
      console.error(error)
    }
  }

  async joinGame(gameCode) {
    try {
      const moon = AppState.myMoon
      const res = await api.put(_endpoint + '/' + gameCode, moon)
      AppState.game = res.data.data
    } catch (error) {
      console.error(error)
    }
  }
}
export const gamesService = new GamesService()
