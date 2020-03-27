<template>
  <div class="cart-item">
    <div class="item-container">
      <div class="product-container">
        <img :src="item.product.image" alt="">
        <div class="product-quantity-buttons">
          <button @click.prevent="decrementQuantity(item)">-</button>
          <input class="product-quantity" type=number :value="item.quantity">
          <button @click.prevent="incrementQuantity(item)">+</button>
        </div>
      </div>
      <div class="information-container">
        <div class="product-name">{{item.product.name}}</div>
        <div class="product-price-container">
          <div class="product-currency">{{item.product.currency}}</div>
          <div class="product-price">{{item.product.price}}</div>
        </div>
      </div>
    </div>
    <button class="remove-button" @click.prevent="removeProductFromCart(item.product)">Remove</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: 'CartProduct',
  props: ["item"],

  methods: {
    ...mapActions(['removeProductFromCart']),

    incrementQuantity (item) {
      item.quantity++
    },

    decrementQuantity (item) {
      if(item.quantity === 1) {
        alert('Negative quantity not allowed')
      } else {
        item.quantity--
      }
    }
  },
}
</script>

<style lang="scss">
  .cart-item {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 10px 50px;
    border-bottom: 1px solid rgb(231, 229, 239);

    .item-container {
      display: flex;

      .product-container {
        img {
          width: 150px;
        }

        .product-quantity-buttons {
          display: flex;
          justify-content: center;

          button {
            width: 24px;
            border-radius: 50%;
            padding: 5px;
            background-color: white;
            border: 1px solid rgb(170, 167, 167);
            outline: none;
            cursor: pointer;
          }

          .product-quantity {
            width: 35px;
            height: 24px;
            border: 1px solid rgb(170, 167, 167);
            margin-right: 5px;
            margin-left: 5px;
            text-align: center;
          }
        }
      }

      .information-container {
        margin-left: 50px;

        .product-name {
          color: #7c7c7c;
          font-size: 1rem;
          margin-bottom: 10px;
          margin-top: 10px;
         }

        .product-price-container {
          display: flex;
          color: #7c7c7c;
          font-size: 18px;

          .product-price {
            margin-left: 5px;
          }
        }
      }
    }

    .remove-button {
      position: absolute;
      right: 50px;
      bottom: 10px;
      background-color: rgb(244, 156, 20);
      height: 36px;
      color: white;
      border: 1px solid #fff;
      border-radius: 3px;
      padding: 10px 42px;
      cursor: pointer;

      &:hover {
        background-color: white;
        border: 1px solid rgb(244, 156, 20);
        color: rgb(244, 156, 20);
      }
    }
  }
</style>