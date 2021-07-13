import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Categories from './categoriesList';
import Card from './card';
import { getProductsFromCategoryAndQuery } from '../services/api';

// Cria input do tipo texto e adicionar uma tag p dando instruções iniciais e o renderiza no App.
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: '',
      items: [],
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleInput({ target }) {
    this.setState({
      searchBar: target.value,
    });
  }

  async handleButton() {
    const { searchBar } = this.state;
    const response = await getProductsFromCategoryAndQuery('', searchBar);
    this.setState({
      items: response.results,
    });
  }

  render() {
    const { searchBar, items } = this.state;
    const { addCartItem } = this.props;
    return (
      <>
        <div>
          <input
            type="text"
            data-testid="query-input"
            value={ searchBar }
            onChange={ this.handleInput }
          />
          <button
            type="button"
            onClick={ this.handleButton }
            data-testid="query-button"
          >
            Pesquisar
          </button>
        </div>
        <input
          type="text"
        />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        {/* Criado um link para que ao ser clicado redirecionar
        para o component ShoppingCart */}
        <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        <Categories />
        <div>
          {items.length < 1
            ? <h3>Nenhum produto foi encontrado</h3>
            : items.map(
              (obj) => <Card item={ obj } key={ obj.id } addCartItem={ addCartItem } />,
            )}
        </div>
      </>
    );
  }
}

Index.propTypes = {
  addCartItem: PropTypes.func,
}.isRequired;

export default Index;
