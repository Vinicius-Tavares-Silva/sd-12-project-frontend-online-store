import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

class ShoppingCart extends Component {
  render() {
    const {
      removeItem,
      cartItemDiminishQuantity,
      cartItemAddQuantity,
      cartList,
      total } = this.props;
    if (cartList.length === 0) {
      return (
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      );
    }
    return (
      <section>
        <div className="card cart-list">
            <h3 className="card-header">Carrinho de Compras</h3>
          <div className="d-flex">
            <ul className="list-group flex-grow-1">
              { cartList.map(
                (item) => (<CartItem
                  key={ item.id }
                  item={ item }
                  removeItem={ removeItem }
                  cartItemDiminishQuantity={ cartItemDiminishQuantity }
                  cartItemAddQuantity={ cartItemAddQuantity }
                  />),
                  )}
            </ul>
            <div className="d-flex flex-column m-2 align-items-center">
            <h4>{ `Total: R$${total}` }</h4>
            <Link
              to="/checkout"
              >
              <button
                className="btn btn-success btn-lg"
                type="button"
                data-testid="checkout-products"
                >
                Checkout
              </button>
            </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

ShoppingCart.propTypes = {
  removeItem: PropTypes.func,
  cartItemDiminishQuantity: PropTypes.func,
  cartItemAddQuantity: PropTypes.func,
}.isRequired;

export default ShoppingCart;
