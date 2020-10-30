<template>
  <div class="home container">

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss">
@import "../assets/_variables.scss";
.nebula-bg1{
  background-image: url('../assets/Moonsets/Nebula-1.png');
  position: absolute;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  min-width: 100vw;
}

.holo-panel-primary{
  border: 1px var(--white) solid;
  background-color: var(--blue75);
}
</style>
