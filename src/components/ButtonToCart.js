import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cartImage from '../cart.svg';

class ButtonToCart extends Component {
  render() {
    const { cartList } = this.props;
    return (
      <button
        type="button"
        className="btn btn-outline-success my-2 my-sm-0"
      >
        <Link
          data-testid="shopping-cart-button"
          to="/cart"
        >
          <span data-testid="shopping-cart-size">
            {cartList.reduce(((acc, item) => acc + item.quantity), 0)}
          </span>
          <img src={ cartImage } alt="shopping cart" />
        </Link>
      </button>
    );
  }
}

ButtonToCart.propTypes = {
  cartList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ButtonToCart;
