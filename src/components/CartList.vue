<template>
  <div>
    <div class="cart-list-container">
      <h4 class="cart-tittle">MY CART</h4>
      <CartProduct v-for="item in cart" :key="item.product.id" :item="item"/>
      <div class="cart-status" v-if="!cart.length">
        <p class="cart-status-message">Sepetinizde ürün bulunmamaktadır.</p>
      </div>
    </div>
  </div>
</template>

<script>
import CartProduct from '../components/CartProduct.vue'
import { mapState } from "vuex";

export default {
  name: 'CartList',
  components: { CartProduct },

  computed: {
    ...mapState(["cart"])
  },
}
</script>


<style lang="scss">
  .cart-list-container {
    display: flex;
    flex-direction: column;
    border: 1px solid rgb(231, 229, 239);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 12px 24px;
    margin-bottom: 30px;

    .cart-tittle {
      color: rgb(170, 167, 167);
      border-bottom: 1px solid rgb(231, 229, 239);
      margin: 0;
      padding: 10px;
    }

    .cart-status {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 300px;

      .cart-status-message {
        display: flex;
        color: #7c7c7c;
        font-size: 18px;
      }
    }
  }
</style>