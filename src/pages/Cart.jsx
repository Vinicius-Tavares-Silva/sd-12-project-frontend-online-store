import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import PropTypes from 'prop-types';
import ProductCard from '../Components/ProductCard';

class Cart extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   cartItems: undefined,
    // };
    // this.getItemsFromStorage = this.getItemsFromStorage.bind(this);
    this.removeItemFromStorage = this.removeItemFromStorage.bind(this);
  }

  componentDidMount() {
    const { getItemsFromStorage } = this.props;
    getItemsFromStorage();
  }

  // getItemsFromStorage() {
  //   if (localStorage.getItem('ItemCart')) {
  //     let actualStorage = localStorage.getItem('ItemCart');
  //     actualStorage = JSON.parse(actualStorage);
  //     this.setState({
  //       cartItems: [...actualStorage],
  //     });
  //   }
  // }

  removeItemFromStorage() {
    localStorage.removeItem('ItemCart');
    const { getItemsFromStorage } = this.props;
    getItemsFromStorage();
    // this.setState({
    //   cartItems: ,
    // });
  }

  render() {
    const { cartItems } = this.props;

    if (cartItems !== undefined) {
      return (
        <div>
          <Link to="/"><AiOutlineHome /></Link>
          <div>
            <button
              type="button"
              onClick={ this.removeItemFromStorage }
            >
              Limpar Items

            </button>
            {cartItems.map((item) => (<ProductCard
              key={ item.id }
              title={ item.title }
              product={ item }
            />))}
          </div>
        </div>
      );
    }
    return (
      <div>
        <Link to="/"><AiOutlineHome /></Link>
        <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
      </div>
    );
  }
}

Cart.propTypes = {
  getItemsFromStorage: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cart;