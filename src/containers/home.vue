<template>
  <div class="menu-wrapper">
    <Header></Header>
    <div class="products-list-wrapper">
      <ProductList />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import ProductList from '../components/ProductList.vue'

export default {
  name: 'Home',
  components: { 
    Header, 
    ProductList 
  },
}
</script>

<style lang="scss">
  .menu-wrapper {
    margin-bottom: 30px;

    .products-list-wrapper {
      margin-right: 10%;
      margin-left: 10%;
      margin-top: 30px;
    }
  }
</style>