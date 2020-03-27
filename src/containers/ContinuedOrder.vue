<template>
  <div>
    <Header></Header>
    <div class="continued-order-container">
      <div class="continued-order-text">
        Your order has been processed.
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'ContinuedOrder',
  components: { Header },
}
</script>

<style lang="scss">
  .continued-order-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px;

    .continued-order-text {
      color: #7c7c7c;
      font-size: 1rem;
      display: flex;
      border: 1px solid rgb(231, 229, 239);
      box-shadow: rgba(0, 0, 0, 0.12) 0px 12px 24px;
      padding: 80px;
    }
  }
</style>