import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartManipulation from './CartManipulation';

class CartItems extends Component {
  render() {
    const { cartList, removeItem } = this.props;
    return (
      <div>
        <h3>
          Carrinho De Compras
        </h3>
        {cartList.map((item) => (
          <CartManipulation item={ item } key={ item.id } removeItem={ removeItem } />
        ))}
      </div>
    );
  }
}

CartItems.propTypes = {
  cartList: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default CartItems;