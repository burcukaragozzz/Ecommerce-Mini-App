export const cartItemCount = (state) => {
  let cartsLength = 0;
  state.cart.forEach(item => {
    cartsLength += item.quantity;
  })
  return cartsLength;
}

export const cartTotalPrice = (state) => {
  let total = 0;
  state.cart.forEach(item => {
    total += item.product.price * item.quantity;
  })
  return total;
}