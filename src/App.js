import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import * as api from './services/api';
import List from './Components/List';
import Categories from './Components/Categories';
import ShoppingCart from './Components/ShoppingCart';
import ShoppingCartLink from './ShoppingCartLink';

class App extends React.Component {
  constructor() {
    super();

    this.handleJonas = this.handleJonas.bind(this);

    this.state = {
      categories: [],
      // isLoading: true,
    };
  }

  componentDidMount() {
    this.handleJonas();
  }

  async handleJonas() {
    const category = await api.getCategories();
    this.setState({
      categories: category,
      // isLoading: false,
    });
  }

  render() {
    const { categories /* isLoading */ } = this.state;
    // if (isLoading) {
    //   return <span>Carregando</span>;
    // }
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ List } />
            <Route exact path="/shopping-cart" component={ ShoppingCart } />
          </Switch>
          <ShoppingCartLink />
        </BrowserRouter>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div className="categories">
          { categories.map((category) => (<Categories
            key={ category.id }
            name={ category.name }
            id={ category.id }
          />)) }
        </div>
      </div>
    );
  }
}

export default App;
