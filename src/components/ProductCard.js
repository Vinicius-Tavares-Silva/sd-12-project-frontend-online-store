import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product, allCart } = this.props;
    const { title, price, thumbnail, id, category_id: categoryID } = product;

    return (
      <Link
        data-testid="product-detail-link"
        to={ `/product-details/${categoryID}/${id}` }
      >
        <div
          data-testid="product"

        >
          <img alt="Foto do produto" src={ thumbnail } />
          <div className="product-card-body">
            <h4 className="product-card-title">{title}</h4>
            <h5 className="product-card-price">{`Preço: R$${price}`}</h5>
          </div>
          <button
            type="button"
            onClick={ () => allCart(product) }
            data-testid="product-add-to-cart"
          >
            ADICIONAR ITEM AO CARRINHO
          </button>
        </div>
      </Link>
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
  allCart: PropTypes.func.isRequired,
};

export default ProductCard;
