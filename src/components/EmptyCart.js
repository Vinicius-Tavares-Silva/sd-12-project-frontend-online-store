import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EmptyCart extends Component {
  render() {
    return (
      <div>
        <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
        <Link to="/">Back</Link>
      </div>
    );
  }
}
