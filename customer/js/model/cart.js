export class Cart {
  cartList = [];

  addItem(cartItem) {
    this.cartList.push(cartItem);
  }

  itemCount() {
    let count = 0;
    this.cartList.forEach((ele) => {
      count += ele.quantity;
    });
    return count;
  }

  calculateSubTotal() {
    let subTotal = 0;
    this.cartList.forEach((ele) => {
      subTotal += ele.product.price * ele.quantity;
    });
    return subTotal;
  }
}
