export const SET_PRODUCTS = (state, products) => {
  state.products = products;
}

export const SET_PRODUCT = (state, product) => {
  state.product = product;
}

export const ADD_TO_CART = (state, { product, quantity }) => {
  
  let productInCard = state.cart.find(item => {
    return item.product.id === product.id;
  })

  if(productInCard) {
    productInCard.quantity += quantity;
    return;
  }
    state.cart.push({
      product,
      quantity
    })
}

export const REMOVE_PRODUCT_FROM_CART = (state, product) => {
  state.cart = state.cart.filter(item => {
    return item.product.id !== product.id;
  })
}

export const CLEAR_CART_ITEMS = (state) => {
  state.cart = [];
}