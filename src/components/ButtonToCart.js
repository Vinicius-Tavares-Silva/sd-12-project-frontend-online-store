import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cartImage from '../cart.svg';

class ButtonToCart extends Component {
  render() {
    const { cartList } = this.props;
    return (
      <div className="btn-cart-container">
        <button
          type="button"
          className="btn my-2 my-sm-0"
          >
          <Link
            data-testid="shopping-cart-button"
            to="/cart"
            >
            <span className="position-relative top-50 start-100 translate-middle badge rounded-pill bg-danger" data-testid="shopping-cart-size">
              {cartList.reduce(((acc, item) => acc + item.quantity), 0)}
            </span>
            <img src={ cartImage } alt="shopping cart" />
          </Link>
        </button>
      </div>
    );
  }
}

ButtonToCart.propTypes = {
  cartList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ButtonToCart;
