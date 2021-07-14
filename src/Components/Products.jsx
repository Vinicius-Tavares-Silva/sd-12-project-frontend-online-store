import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Products extends Component {
  render() {
    const { title, img, price, category_id } = this.props;
    return (
      <div data-testid="product" className="card">
        <p>{ title }</p>
        <img src={ img } width="50px" alt="produto" className="photo" />
        <p>{ price }</p>
        <Link
          to={ `/product-detail/${category_id}/${title}` }
          data-testid="product-detail-link"
        >
          Ver Detalhes
        </Link>
      </div>
    );
  }
}

Products.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category_id: PropTypes.string.isRequired,
};

export default Products;
