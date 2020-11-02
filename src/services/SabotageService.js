import { AppState } from '../AppState'

class SabotageService {
  targetMoon(moon) {
    AppState.targetMoon = moon
    console.log(AppState.targetMoon)
  }
}
export const sabotageService = new SabotageService()
