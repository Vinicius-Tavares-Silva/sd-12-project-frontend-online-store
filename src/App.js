import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ ProductList } />
        <Route exact path="/ShoppingCart" component={ ShoppingCart } />
      </BrowserRouter>
    );
  }
}

export default App;
