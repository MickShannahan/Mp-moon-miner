export default {
  randomCode() {
    const genderatedCode = []
    const code = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
    for (let i = 1; i <= 4; i++) {
      const index = Math.floor(Math.random() * code.length)
      genderatedCode.push(code[index])
    }
    return genderatedCode.join('')
  }
}
