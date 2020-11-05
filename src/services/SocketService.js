import io from 'socket.io-client'

let socket = {}

export const socketService = {

  initializeSocket() {
    socket = io(
      window.location.host.includes('localhost') ? '//localhost:3000/' : '/'
    )
    socket.on('CONNECTED', (data) => {
      console.log(data.message + ' Let the villany commence')
    })
    socket.on('NEWPLAYER', (data) => {
      console.log('player joined the game', data)
    })

    // registers event listeners for emits from socketservice
  },
  joinRoom(state, roomName) {
    socket.emit('dispatch', { action: 'joinRoom', data: 'game-' + roomName })
    console.log('joining room...', 'game-' + roomName)
  },
  leaveRoom(state, roomName) {
    socket.emit('disconnect', { action: 'leaveRoom', data: roomName })
  }

}
