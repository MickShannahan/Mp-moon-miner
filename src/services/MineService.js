import { api } from './AxiosService'
const _endpoint = 'mine'
class MineService {
  async clickMoon() {
    try {
      const res = await api.put(_endpoint, 'mined')
      console.log(res.data)
    } catch (error) {
      console.error(error)
    }
  }
}
export const mineService = new MineService()
