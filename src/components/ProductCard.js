import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product, addItemToCart } = this.props;
    const { title, price, thumbnail, id, category_id: categoryID } = product;
    return (
      <div>
        <Link
          data-testid="product-detail-link"
          to={ `/product-details/${categoryID}/${id}` }
        >
          <div data-testid="product">
            <img alt="Foto do produto" src={ thumbnail } />
            <div className="product-card-body">
              <h4 className="product-card-title">{title}</h4>
              <h5 className="product-card-price">{`Preço: R$${price}`}</h5>
            </div>
          </div>
        </Link>
        <button
          type="button"
          onClick={ () => addItemToCart(product) }
          data-testid="product-add-to-cart"
        >
          ADICIONAR ITEM AO CARRINHO
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    category_id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  addItemToCart: PropTypes.func.isRequired,
};

export default ProductCard;
