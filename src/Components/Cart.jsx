import React, { Component } from 'react';

class Cart extends Component {
  render() {
    return (
      <div data-testid="shopping-cart-empty-message" className="infoText">
        Seu carrinho está vazio
      </div>
    );
  }
}
export default Cart;
