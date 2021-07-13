import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from './ProductCard';
import CategoriesList from './CategoriesList';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      searchInput: '',
      category: '',
      loading: false,
    };
    this.inputSearchChange = this.inputSearchChange.bind(this);
    this.searchButton = this.searchButton.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
  }

  inputSearchChange(event) {
    const { value } = event.target;
    this.setState({
      searchInput: value,
      loading: true,
    });
  }

  async searchButton() {
    const { searchInput, category } = this.state;
    const filter = await getProductsFromCategoryAndQuery(category, searchInput);
    this.setState({
      products: filter.results,
      searchInput: '',
      loading: false,
    });
  }

  updateCategory(event) {
    const { id } = event.target;
    this.setState({ category: id, loading: true }, () => this.searchButton());
  }

  render() {
    const { products, searchInput, loading } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="searchProduct">
            <input
              type="text"
              name="searchProduct"
              value={ searchInput }
              data-testid="query-input"
              onChange={ this.inputSearchChange }
            />
          </label>
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.searchButton }
          >
            Procurar
          </button>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </form>
        <div className="main-container">
          <CategoriesList callback={ this.updateCategory } />
          <div className="product-container">
            {loading
              ? <span>Loading...</span>
              : products.map((product) => (
                <ProductCard key={ product.title } product={ product } />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
