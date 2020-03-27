<template>
  <div class="products-list-container">
    <Product v-for="product in products" :key="product.id" :product="product"/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Product from '../components/Product.vue'
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ProductList',
  components: { 
    Header, 
    Product 
  },

  computed: {
    ...mapState(["products"])
  },

  mounted() {
    this.getProducts()
  },

  methods: {
    ...mapActions(["getProducts"])
  }
}
</script>

<style lang="scss">
  .products-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    min-width: 765px;
  }
</style>