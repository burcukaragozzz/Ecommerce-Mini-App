<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './containers/Home.vue'
import Cart from './containers/Cart.vue'
import ContinuedOrder from './containers/ContinuedOrder.vue'


export default {
  name: 'app',
  components: { Home, Cart, ContinuedOrder }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    margin: 0;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
