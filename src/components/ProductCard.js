import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const clastitle = 'card-title product-card-title text-decoration-none fs-5 text-dark';
    const classtext = 'card-text product-card-price text-decoration-none fs-6 text-dark';
    const { product, addItemToCart } = this.props;
    const {
      title,
      price,
      thumbnail,
      id,
      category_id: categoryID,
      shipping: { free_shipping: freeShipping },
    } = product;

    return (
      <div className="card shadow-sm m-2" style={ { width: '20%' } }>
        <Link
          className="text-decoration-none"
          data-testid="product-detail-link"
          to={ `/product-details/${categoryID}/${id}` }
        >
          <div
            className="d-flex flex-column"
            style={ { maxwidth: '10px' } }
            data-testid="product"
          >
            <img alt="Foto do produto" src={ thumbnail } />
            <div className="card-body product-card-body">
              <h4 className={ clastitle }>
                {title}
              </h4>
              <h5 className={ classtext }>{ `Preço: R$${price}` }</h5>
              {freeShipping && (
                <p
                  className="card-text text-decoration-none fs-6 text-success"
                  data-testid="free-shipping"
                >
                  FRETE GRATIS!
                </p>
              )}
            </div>
          </div>
        </Link>
        <button
          className="btn btn-info position-absolute bottom-0 start-0 m-1 btn-sm"
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
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }).isRequired,
  addItemToCart: PropTypes.func.isRequired,
};

export default ProductCard;
