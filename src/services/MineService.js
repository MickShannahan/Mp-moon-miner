import { AppState } from '../AppState'

class MineService {
  clickMoon() {
    AppState.myMoon.cheese++
  }
}
export const mineService = new MineService()
