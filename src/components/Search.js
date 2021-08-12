import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import CategoryList from './CategoryList';
import ProductCard from './ProductCard';
import ButtonToCart from './ButtonToCart';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'none',
      queryText: '',
      productList: [],
      categoryText: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderList = this.renderList.bind(this);
    this.renderSortSelector = this.renderSortSelector.bind(this);
    this.handleCategoryText = this.handleCategoryText.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.checkListInCart = this.checkListInCart.bind(this);
  }

  async handleSubmit() {
    const { queryText, categoryText } = this.state;
    const { getProductsFromCategoryAndQuery } = api;
    const results = await getProductsFromCategoryAndQuery(categoryText, queryText);
    this.setState({
      loading: 'done',
      productList: results,
    }, (() => {
      // this.handleSort('increasingPrice');
      this.checkListInCart();
    }));
  }

  handleSort(event) {
    this.setState((prevState) => {
      if (event === 'decreasingPrice') {
        prevState.productList.results.sort((a, b) => b.price - a.price);
      }
      if (event === 'increasingPrice') {
        prevState.productList.results.sort((b, a) => b.price - a.price);
      }
      return prevState;
    });
  }

  handleCategoryText(event) {
    const { id } = event.target;
    this.setState({
      categoryText: id,
      queryText: '',
    }, () => this.handleSubmit());
  }

  checkListInCart() {
    const { cartList } = this.props;
    this.setState((prevState) => {
      prevState.productList.results.forEach((element, index) => {
        prevState.productList.results[index].inCart = false;
        const exists = cartList.find((item) => item.id === element.id);
        if (exists !== undefined) prevState.productList.results[index].inCart = true;
      });
      return prevState;
    });
  }

  renderForm() {
    return (
      <form className="form-inline my-2 my-lg-0">
        <label htmlFor="query">
          <input
            data-testid="query-input"
            placeholder="O que tu queres procurar?"
            id="query"
            type="text"
            onChange={ (event) => this.setState({ queryText: event.target.value }) }
            className="form-control mr-sm-2"
          />
        </label>
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          data-testid="query-button"
          type="button"
          onClick={ this.handleSubmit }
        >
          Procurar
        </button>
      </form>
    );
  }

  renderSortSelector() {
    return (
      <form>
        Ordenação 
        <label htmlFor="sort_select">
          <input
            name="sort_select"
            type="radio"
            value="increasingPrice"
            onClick={ (event) => this.handleSort(event.target.value) }
          />
          Preço crescente
          <input
            name="sort_select"
            type="radio"
            value="decreasingPrice"
            onClick={ (event) => this.handleSort(event.target.value) }
          />
          Preço decrescente
        </label>
      </form>
    );
  }

  renderList() {
    const { addItemToCart } = this.props;
    const { loading } = this.state;
    if (loading === 'loading') return <p>Loading...</p>;
    if (loading === 'none') return <div />;
    const { productList: { results } } = this.state;
    if (results.length === 0) return <p>Nenhum produto foi encontrado</p>;
    return (
      <div>
        { this.renderSortSelector() }
        <ul className="d-flex flex-wrap justify-content-evenly">
          { results.map(
            (prod) => (<ProductCard
              key={ prod.id }
              product={ prod }
              addItemToCart={ addItemToCart }
              checkListInCart={ this.checkListInCart }
            />),
          )}
        </ul>
      </div>
    );
  }

  render() {
    const { cartList } = this.props;
    return (
      <div className="d-flex">
        <div className="list-group category-list">
          <CategoryList handleCategoryText={ this.handleCategoryText } />
        </div>
        <div className="container d-flex flex-column">
          <div className="alignDiv">
            <div className="search-bar" data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
              {this.renderForm()}
            </div>
            <div className="cart">
              <ButtonToCart cartList={ cartList } />
            </div>
          </div>
          {this.renderList()}
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  addItemToCart: PropTypes.func.isRequired,
  cartList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Search;
