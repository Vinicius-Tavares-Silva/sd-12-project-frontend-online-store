import React from 'react';
import { Link } from 'react-router-dom';

import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CategoryAside from '../components/CategoryAside';
import ProductList from '../components/ProductList';
import Input from '../components/Input';

const initialMsg = (
  <p data-testid="home-initial-message">
    Digite algum termo de pesquisa ou escolha uma categoria.
  </p>
);
const notFoundMsg = <p>Nenhum produto foi encontrado</p>;

const initialState = {
  queryText: '',
  products: [],
  didSearch: false,
  categories: [],
};
class Home extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.categoryAndQuery = this.categoryAndQuery.bind(this);
    this.categoryApi = this.categoryApi.bind(this);

    this.state = initialState;
  }

  componentDidMount() {
    this.categoryApi();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  async categoryApi() {
    const newCagories = await getCategories();
    this.setState({ categories: newCagories });
  }

  async categoryAndQuery(id = '') {
    const { queryText } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(id, queryText);
    this.setState({
      products: results,
      didSearch: true,
    });
  }

  render() {
    const {
      queryText,
      products,
      didSearch,
      categories,
    } = this.state;

    const msg = didSearch ? notFoundMsg : initialMsg;

    return (
      <section>
        <Input
          id="query-input"
          type="text"
          name="queryText"
          value={ queryText }
          handleChange={ this.handleChange }
        />
        <button
          type="button"
          onClick={ this.categoryAndQuery }
          data-testid="query-button"
        >
          Pesquisar
        </button>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          Carrinho de Compras
        </Link>
        <CategoryAside
          categoryObj={ categories }
          categoryAndQuery={ this.categoryAndQuery }
        />
        {(products.length > 0) ? <ul><ProductList products={ products } /></ul> : msg}
      </section>
    );
  }
}

export default Home;