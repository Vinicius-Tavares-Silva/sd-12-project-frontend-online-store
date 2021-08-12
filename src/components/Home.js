import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './Search';
import ProductDetail from './ProductDetail';
import ShoppingCart from './ShoppingCart';
import Checkout from './Checkout';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
      newProduct: undefined,
      total: 0,
    };
    this.removeItem = this.removeItem.bind(this);
    this.cartItemAddQuantity = this.cartItemAddQuantity.bind(this);
    this.cartItemDiminishQuantity = this.cartItemDiminishQuantity.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
    this.saveLocalStorage = this.saveLocalStorage.bind(this);
    this.loadLocalStorage = this.loadLocalStorage.bind(this);
  }

  componentDidMount() {
    this.loadLocalStorage();
  }

  loadLocalStorage() {
    const localState = JSON.parse(localStorage.getItem('state'));
    if (localState === null) return null;
    this.setState(localState);
  }

  saveLocalStorage() {
    localStorage.setItem('state', JSON.stringify(this.state));
    this.updateTotal = this.updateTotal.bind(this);
  }

  updateTotal() {
    const { cartList } = this.state;
    let total = 0;
    this.saveLocalStorage();
    cartList.forEach((item) => {
      total += (item.price * item.quantity);
      return total;
    });
    this.setState({ total });
  }

  addItemToCart(product) {
    const { cartList } = this.state;
    const selItem = cartList.find((item) => item.id === product.id);
    if (selItem !== undefined) {
      return this.cartItemAddQuantity(product.id);
    }

    product.quantity = 1;
    this.setState(({
      newProduct: product,
    }), () => this.saveCart());
  }

  saveCart() {
    this.setState(({ cartList, newProduct }) => ({
      cartList: [...cartList, newProduct],
    }), () => this.updateTotal());
  }

  cartItemAddQuantity(id) {
    const { cartList } = this.state;
    const selIndex = cartList.findIndex((item) => item.id === id);
    const selItem = cartList.find((item) => item.id === id);
    if (selItem.quantity >= selItem.available_quantity) return null;
    cartList[selIndex].quantity = selItem.quantity + 1;
    this.setState({ cartList }, () => this.updateTotal());
  }

  cartItemDiminishQuantity(id) {
    const { cartList } = this.state;
    const selItem = cartList.find((item) => item.id === id);
    if (selItem.quantity <= 1) return null;
    const selIndex = cartList.findIndex((item) => item.id === id);
    cartList[selIndex].quantity = selItem.quantity - 1;
    this.setState({ cartList }, () => this.updateTotal());
  }

  removeItem(id) {
    const { cartList } = this.state;
    const selIndex = cartList.findIndex((item) => item.id === id);
    cartList.splice(selIndex, 1);
    this.setState({ cartList }, () => this.updateTotal());
  }

  render() {
    const { cartList, total } = this.state;
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (<Search
              addItemToCart={ this.addItemToCart }
              cartList={ cartList }
            />) }
          />
          <Route
            exact
            path="/product-details/:categoryID/:id"
            render={ (props) => (<ProductDetail
              { ...props }
              addItemToCart={ this.addItemToCart }
              cartList={ cartList }
            />) }
          />
          <Route
            exact
            path="/cart"
            render={ () => (<ShoppingCart
              cartItemAddQuantity={ this.cartItemAddQuantity }
              cartItemDiminishQuantity={ this.cartItemDiminishQuantity }
              removeItem={ this.removeItem }
              cartList={ cartList }
              total={ total }
            />) }
          />
          <Route
            path="/checkout"
            render={ () => <Checkout /> }
          />
        </Switch>
      </Router>
    );
  }
}
//  :)
export default Home;
