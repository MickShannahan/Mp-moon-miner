<template>
  <div class="home container-fluid">
    <div class=" row align-content-center justify-content-center h-100 my-auto">
      <div class="centered col-7">
        <button class="btn btn-block btn-primary p-4" @click="createGame">
          create a game
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import { gamesService } from '../services/GameService'
// @ is an alias to /src

export default {
  name: 'Home',
  setup() {
    const state = reactive({

    })

    return { state, createGame: () => { gamesService.createGame() } }
  },
  components: { }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Libre+Barcode+39&family=Turret+Road:wght@500&display=swap');
// fonts
.font-bc{
  font-family: 'Libre Barcode 39', cursive;
}

.font-primary{
font-family: 'Turret Road', cursive;
}

// classes
.centered{
  position: fixed;
  top: 48vh;
  right: 0vw;
}
.nebula-bg1{
  background-image: url('../assets/Moonsets/Nebula-1.png');
  position: absolute;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  min-width: 100vw;
}

.panel{
  border: 4px outset rgb(73, 73, 73)!important;
}

.screen-bezel{
   box-shadow: inset 0px 0px 5px 5px  rgba(129, 122, 219, 0.753);
  outline: 6px solid rgb(58, 58, 58);
  border: 4px inset rgb(73, 73, 73)!important;
}

.holo-panel-primary{
  color: white;
  text-shadow:0px 0px 3px 3px  rgba(123, 118, 199, 0.753) ;
  border: 1px var(--white) solid;
  background-color: rgba(72, 61, 223, 0.13);
  box-shadow: inset 0px 0px 5px 5px  rgba(129, 122, 219, 0.753), 0px 0px 3px 3px  rgba(123, 118, 199, 0.753),
   0px 0px 5px 5px  rgba(119, 109, 255, 0.753);
}
.holo-panel-enemy{
  color: white;
  text-shadow:0px 0px 3px 3px  rgba(199, 118, 118, 0.753) ;
  border: 1px var(--white) solid;
  background-color: rgba(223, 67, 61, 0.13);
  box-shadow: inset 0px 0px 5px 5px  rgba(219, 122, 122, 0.753), 0px 0px 3px 3px  rgba(199, 118, 118, 0.753),
   0px 0px 5px 5px  rgba(255, 109, 109, 0.753);
}
.holo-panel-sabotage{
  color: white;
  text-shadow:0px 0px 3px 3px  rgba(199, 118, 118, 0.753);
  border: 1px var(--white) solid;
  background-color: rgba(223, 67, 61, 0.356)!important ;
  box-shadow: inset 0px 0px 5px 5px  rgba(219, 122, 122, 0.753), 0px 0px 3px 3px  rgba(199, 118, 118, 0.753),
   0px 0px 5px 5px  rgba(255, 109, 109, 0.753);
}
.crt::after {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(56, 56, 56, 0.1);
  opacity: 0;
  z-index: 2;
  pointer-events: none;
  animation: flicker .07s infinite;
}
.crt::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(rgba(18, 16, 16, 0.1) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  z-index: 2;
  background-size: 100% 2px, 3px 100%;
  pointer-events: none;
}
.crt {
  animation: textShadow .5s infinite;
}
.barcode:hover{
  animation: barcodehover 1s;
}
// buttons
.btn-phys{
  position: absolute;
  border-bottom: 3px solid;
  transition: all .2s ease-in-out
}

.btn-phys:hover{
  border-bottom: 1px solid;
transform: translateY(2px);
}

.btn-outline-light{
  box-shadow:0px 0px 5px 1px rgba(255, 255, 255, 0.658);
}
// ANIMATIONS
@keyframes satalite{
  0%{transform: rotate(40deg) translate( -5%, -12%);}
  10%{}
  20%{}
  30%{}
  40%{}
  50%{transform:rotate(40deg) translate( 5%, 82%);}
  60%{ }
  70%{}
  80%{}
  90%{}
  100%{transform: rotate(40deg) translate( -5%, -12%); z-index: +1;;}
}
@keyframes float{
  0% {
    transform: translate(0px, 0%);
  }
  25%{
    transform: translate(0px, -5%);
  }
  50%{
    transform: translate(0px, 0%);
  }
  75%{
    transform: translate(0px, 5%);
  }
  100%{
    transform: translate(0px, 0%);
  }
}

@keyframes barcodehover{
  20% {
    font-family: 'Libre Barcode 39', cursive;
  }
  25% {
    font-family: inherit;
  }
}
@keyframes flicker {
  0% {
    opacity: 0.27861;
  }
  5% {
    opacity: 0.34769;
  }
  10% {
    opacity: 0.23604;
  }
  15% {
    opacity: 0.90626;
  }
  20% {
    opacity: 0.18128;
  }
  25% {
    opacity: 0.83891;
  }
  30% {
    opacity: 0.65583;
  }
  35% {
    opacity: 0.67807;
  }
  40% {
    opacity: 0.26559;
  }
  45% {
    opacity: 0.84693;
  }
  50% {
    opacity: 0.96019;
  }
  55% {
    opacity: 0.08594;
  }
  60% {
    opacity: 0.20313;
  }
  65% {
    opacity: 0.71988;
  }
  70% {
    opacity: 0.53455;
  }
  75% {
    opacity: 0.37288;
  }
  80% {
    opacity: 0.71428;
  }
  85% {
    opacity: 0.70419;
  }
  90% {
    opacity: 0.7003;
  }
  95% {
    opacity: 0.36108;
  }
  100% {
    opacity: 0.24387;
  }
}
@keyframes textShadow {
  0% {
    text-shadow: 0.4389924193300864px 0 1px rgba(0,30,255,0.5), -0.4389924193300864px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  5% {
    text-shadow: 2.7928974010788217px 0 1px rgba(0,30,255,0.5), -2.7928974010788217px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  10% {
    text-shadow: 0.02956275843481219px 0 1px rgba(0,30,255,0.5), -0.02956275843481219px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  15% {
    text-shadow: 0.40218538552878136px 0 1px rgba(0,30,255,0.5), -0.40218538552878136px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  20% {
    text-shadow: 3.4794037899852017px 0 1px rgba(0,30,255,0.5), -3.4794037899852017px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  25% {
    text-shadow: 1.6125630401149584px 0 1px rgba(0,30,255,0.5), -1.6125630401149584px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  30% {
    text-shadow: 0.7015590085143956px 0 1px rgba(0,30,255,0.5), -0.7015590085143956px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  35% {
    text-shadow: 3.896914047650351px 0 1px rgba(0,30,255,0.5), -3.896914047650351px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  40% {
    text-shadow: 3.870905614848819px 0 1px rgba(0,30,255,0.5), -3.870905614848819px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  45% {
    text-shadow: 2.231056963361899px 0 1px rgba(0,30,255,0.5), -2.231056963361899px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  50% {
    text-shadow: 0.08084290417898504px 0 1px rgba(0,30,255,0.5), -0.08084290417898504px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  55% {
    text-shadow: 2.3758461067427543px 0 1px rgba(0,30,255,0.5), -2.3758461067427543px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  60% {
    text-shadow: 2.202193051050636px 0 1px rgba(0,30,255,0.5), -2.202193051050636px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  65% {
    text-shadow: 2.8638780614874975px 0 1px rgba(0,30,255,0.5), -2.8638780614874975px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  70% {
    text-shadow: 0.48874025155497314px 0 1px rgba(0,30,255,0.5), -0.48874025155497314px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  75% {
    text-shadow: 1.8948491305757957px 0 1px rgba(0,30,255,0.5), -1.8948491305757957px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  80% {
    text-shadow: 0.0833037308038857px 0 1px rgba(0,30,255,0.5), -0.0833037308038857px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  85% {
    text-shadow: 0.09769827255241735px 0 1px rgba(0,30,255,0.5), -0.09769827255241735px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  90% {
    text-shadow: 3.443339761481782px 0 1px rgba(0,30,255,0.5), -3.443339761481782px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  95% {
    text-shadow: 2.1841838852799786px 0 1px rgba(0,30,255,0.5), -2.1841838852799786px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  100% {
    text-shadow: 2.6208764473832513px 0 1px rgba(0,30,255,0.5), -2.6208764473832513px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
}

@keyframes holo-open{
  0%{transform: scale(.05, .05), translate(-50%,50%);}
  10%{transform: scale(.1, 1.1), translate(-90%,50%);}
  20%{transform: scale(.1, 1), translate(-90%, 1%);}
  30%{transform: scale(.75, 1), translate(-25%,1%);}
  40%{transform: scale(1, 1);}
  45%{transform: scale(1, 1);}
}
</style>
