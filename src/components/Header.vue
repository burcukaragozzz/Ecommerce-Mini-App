<template>
  <div class="header-wrapper">
    <div class="header-menu">
      <ul class="header-menu-list">
        <router-link class="router-link-container" to="/">
          <li class="header-menu-item">
            <img src="../images/house.png" alt="">
            HOME
          </li>
        </router-link>
        <router-link class="router-link-container" to="/cart">
          <li class="header-menu-item">
            <div class="cart-item-count" v-if="cartItemCount > 0">{{cartItemCount}}</div>
            <img src="../images/cart.png" alt="">
            MY CART
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'Header',
  computed: {
    ...mapGetters(["cartItemCount"])
  }
}
</script>


<style lang="scss">
  .header-wrapper {
    display: flex;
    justify-content: flex-end;
    background-color: rgb(244, 156, 20);
    padding: 10px;

    .header-menu {
      .header-menu-list {
        display: flex;
        list-style: none;
        margin: 5px;

        .router-link-container {
          padding: 10px;
          color: #000;
          text-decoration: none;
          font-size: 15px;
          font-weight: 300;

          .header-menu-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-decoration: none;

            .cart-item-count {
              position: absolute;
              background-color: #fff;
              padding: 4px 8px;
              border-radius: 50%;
              border: 1px solid #000;
              right: 35px;
              top: 15px;
            }
            
            img {
              width: 32px;
              padding-bottom: 5px;
            }
          }
        }
      }
    }
  }
</style>