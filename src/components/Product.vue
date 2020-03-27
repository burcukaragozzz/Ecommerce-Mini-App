<template>
  <div class="product-item">
    <img :src="product.image" alt="">
    <div class="product-name">{{product.name}}</div>
    <div class="product-information">
      <div class="product-price-container">
        <div class="product-currency">{{product.currency}}</div>
        <div class="product-price">{{product.price}}</div>
      </div>
      <div class="button-container">
        <button class="addBasket-button" @click="addBasket()">Add Basket</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
  name: 'Product',
  props: ["product"],

  methods: {

    ...mapActions(["addProductToCart"]),

    addBasket() {
      this.addProductToCart ({
        product: this.product,
        quantity: 1
      })
    }
  }
}
</script>


<style lang="scss">
  .product-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-shrink: 1;
    border: 1px solid rgb(170, 167, 167);
    margin-bottom: 10px;
    padding: 10px;
    width: 47%;

    img {
      width: 180px;
    }

    .product-name {
      color: #7c7c7c;
      font-size: 1rem;
      margin-bottom: 10px;
      margin-top: 10px;
    }

    .product-information {
      display: flex;
      width: 300px;
      justify-content: space-between;
      padding: 5px;
      
      .product-price-container {
        display: flex;

        .product-currency {
          display: flex;
          color: #7c7c7c;
          font-size: 1.5rem;
        }
        
        .product-price {
          display: flex;
          color: #7c7c7c;
          font-size: 1.5rem;
          margin-left: 5px;
        }
      }

      .button-container{
        display: flex;

        .addBasket-button {
          display: flex;
          background-color: rgb(244, 156, 20);
          color: white;
          border: 1px solid rgb(244, 156, 20);
          border-radius: 3px;
          padding: 10px 42px;
          cursor: pointer;
          outline: none;

          &:hover {
            background-color: white;
            border: 1px solid rgb(244, 156, 20);
            color: rgb(244, 156, 20);
          }
        }
      }
    }
  }
</style>