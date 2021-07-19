import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartProductCard from './CartProductCard';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.checkCart = this.checkCart.bind(this);

    this.state = {
      empty: true,
    };
  }

  componentDidMount() {
    this.checkCart();
  }

  checkCart() {
    const { cartProducts } = this.props;
    if (cartProducts.length > 0) {
      this.setState({
        empty: false,
      });
    }
  }

  render() {
    const { empty } = this.state;
    const { filteredProducts, addToCart, rmvFromCart, cartProducts } = this.props;
    if (empty) {
      return (
        <div className="main-container">
          <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
        </div>
      );
    }

    return (
      <div>
        { filteredProducts.map(({ amount, product }) => (<CartProductCard
          key={ product.id }
          product={ product }
          amount={ amount }
          addToCart={ addToCart }
          rmvFromCart={ rmvFromCart }
          cartProducts={ cartProducts }
        />)) }
        <Link data-testid="checkout-products" to="/checkout">
          Finalizar Compra!
        </Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  filteredProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func.isRequired,
  rmvFromCart: PropTypes.func.isRequired,
};

export default ShoppingCart;
