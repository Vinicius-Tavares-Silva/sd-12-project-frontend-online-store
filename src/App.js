import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CartProduct from './pages/CartProduct';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Link to="/cart" data-testid="shopping-cart-button">
            <img src="https://img.icons8.com/ios/50/000000/shopping-cart.png" alt="carrinho" />
          </Link>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/cart" component={ CartProduct } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
