import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ShoppingCart from './components/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <section>
          <BrowserRouter>
            <Route exact path="/" component={ HomePage } />
            <Route exact path="/shoppingcart" component={ ShoppingCart } />
          </BrowserRouter>
        </section>
      </main>
    );
  }
}

export default App;
