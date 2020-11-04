import { api } from './AxiosService'
const _endpoint = 'games'
class GamesService {
  async createGame() {
    try {
      const res = await api.post(_endpoint, { name: 'test' })
      console.log(res.data)
    } catch (error) {
      console.error(error)
    }
  }
}
export const gamesService = new GamesService()
