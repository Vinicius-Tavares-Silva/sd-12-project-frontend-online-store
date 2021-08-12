import React from 'react';
import PropTypes from 'prop-types';

class CartItem extends React.Component {
  render() {
    const { item: {
      id,
      title,
      price,
      thumbnail,
      quantity } } = this.props;
    const {
      removeItem,
      cartItemDiminishQuantity,
      cartItemAddQuantity } = this.props;

    return (
      <div>
        <img alt="Foto do produto" src={ thumbnail } />
        <div className="cart-item-body">
          <h4 data-testid="shopping-cart-product-name">{title}</h4>
          <h5 className="cart-item-price">{`Preço: R$${price * quantity}`}</h5>
        </div>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ () => cartItemDiminishQuantity(id) }
        >
          -
        </button>
        <span
          data-testid="shopping-cart-product-quantity"
        >
          { `Quantidade: ${quantity}` }
        </span>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ () => cartItemAddQuantity(id) }
        >
          +
        </button>
        <button
          data-testid="product-remove"
          type="button"
          onClick={ () => removeItem(id) }
        >
          Remover
        </button>
      </div>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    quantity: PropTypes.number,

    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
  removeItem: PropTypes.func.isRequired,
  cartItemDiminishQuantity: PropTypes.func.isRequired,
  cartItemAddQuantity: PropTypes.func.isRequired,
};

export default CartItem;
