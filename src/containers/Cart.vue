<template>
  <div class="cart-wrapper">
    <Header></Header>
    <div class="cart-list-wrapper">
      <CartList></CartList>
      <div class="total-price-container" v-if="cartTotalPrice">
        <div class="total-price-text">Total Price : </div>
        <div class="total-price"> {{cartTotalPrice}} </div>
        <div class="total-price-curreny">TRY</div>
      </div>
      <button 
        class="clear-button" 
        v-if="cartTotalPrice > 0" 
        @click.prevent="clearCartItems()"
      >
        EMPTY CART
      </button>
      <div class="order-buttons">
        <button class="continue-shopping-button" >
          <router-link 
            class="continue-shopping-link"
            to="/"
          >
          CONTUNIE SHOPPING
          </router-link>  
        </button>
        <button class="place-order-button" to="/continuedOrder"  v-if="cartTotalPrice > 0"  @click.prevent="clearCartItems()">
          <router-link 
            class="place-order-link"
            to="/continuedOrder"
          >
          PLACE ORDER
          </router-link>  
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import CartList from '../components/CartList.vue'
import { mapGetters, mapActions } from "vuex"
export default {
  name: 'Cart',
  components: { Header, CartList },

  computed: {
    ...mapGetters(["cartTotalPrice"])
  },

  methods: {
    ...mapActions(['clearCartItems']),
  }
}
</script>


<style lang="scss">
  .cart-wrapper {
    margin-bottom: 30px;

    .cart-list-wrapper {
      position: relative;
      margin-right: 10%;
      margin-left: 10%;
      margin-top: 30px;
      min-width: 480px;

      .total-price-container {
        display: flex;
        justify-content: flex-end;
        color: #7c7c7c;
        align-items: center;

        .total-price-text {
          font-size: 18px;
          margin-right: 5px;
        }

        .total-price,
        .total-price-curreny {
          font-size: 24px;
          margin-left: 5px;
        }
      }

      .clear-button {
        display: flex;
        background-color: rgb(244, 156, 20);
        color: white;
        border: none;
        border-radius: 3px;
        padding: 10px 47px;
        cursor: pointer;
        outline: none;
        position: absolute;
        right: 0;
        margin-top: 10px;
      }

      .order-buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 50px;

        .continue-shopping-button,
        .place-order-button {
          display: flex;
          background-color: rgb(244, 156, 20);
          border: none;
          border-radius: 3px;
          padding: 10px 42px;
          cursor: pointer;
          outline: none;
        }

        .continue-shopping-link,
        .place-order-link {
          text-decoration: none;
          color: white;
        }
      }
    }
  }

</style>