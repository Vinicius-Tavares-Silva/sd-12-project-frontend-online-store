import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CartBasket from './pages/CartBasket';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cartList: [],
    };
    this.removeItem = this.removeItem.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(item) {
    this.setState((prevState) => ({
      cartList: [...prevState.cartList, item],
    }));
  }

  removeItem(item) {
    const { id } = item;
    this.setState((prev) => {
      const { cartList } = prev;
      const filtro = cartList.filter((cartItem) => cartItem.id !== id);
      return { cartList: filtro };
    });
  }

  render() {
    const { cartList } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/cart-basket"
            render={ (props) => (<CartBasket
              { ...props }
              cartList={ cartList }
              removeItem={ this.removeItem }
            />) }
          />
          <Route
            exact
            path="/"
            render={ (props) => <Home { ...props } addToCart={ this.addToCart } /> }
          />
          <Route
            path="/product-details/:categoryId/:id"
            render={
              (props) => <ProductDetails { ...props } addToCart={ this.addToCart } />
            }
          />
          <Route
            exact
            path="/checkout"
            render={ (props) => (
              <Checkout
                { ...props }
                cartList={ cartList }
              />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
