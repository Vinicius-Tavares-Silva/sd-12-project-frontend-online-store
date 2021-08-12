import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonToCart from './ButtonToCart';
import { getProductsFromCategoryAndQuery } from '../services/api';
import FormEvaluator from './FormEvaluator';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      loading: true,
    };
    this.getProductDetail = this.getProductDetail.bind(this);
  }

  componentDidMount() {
    this.getProductDetail();
  }

  async getProductDetail() {
    const {
      match: {
        params: { id, categoryID },
      },

    } = this.props;
    const productList = await getProductsFromCategoryAndQuery(categoryID, '');

    const product = productList.results.find((prod) => prod.id === id);
    this.setState({
      product,
      loading: false,
    });
  }

  render() {
    const { product, loading } = this.state;
    const { addItemToCart, cartList } = this.props;
    const {
      title,
      price,
      thumbnail,
      id,
      available_quantity: availableQuantity,
      sold_quantity: soldQuantity,
      shipping,
    } = product;

    if (loading) {
      return (
        <div>
          <ButtonToCart cartList={ cartList } />
          <p>Carregando informações do produto</p>
        </div>
      );
    }
    return (
      <div>
        <ButtonToCart cartList={ cartList } />
        <div>
          <p>DETALHES</p>
          <img alt="Foto do produto" src={ thumbnail } />
          <div className="product-details-body">
            <p data-testid="product-detail-name">{title}</p>
            <p>{ id }</p>
            <p>{`Preço: R$${price}`}</p>
            {shipping.free_shipping && <p data-testid="free-shipping">FRETE GRATIS!</p>}
            <p>{`Quantidade disponivel: ${availableQuantity}`}</p>
            <p>{`Quantidade vendida: ${soldQuantity}`}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={ () => addItemToCart(product) }
          data-testid="product-detail-add-to-cart"
        >
          ADICIONAR ITEM AO CARRINHO
        </button>
        <Link to="/">Voltar para home page</Link>
        <FormEvaluator />
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      categoryID: PropTypes.string,
    }).isRequired,
  }).isRequired,
  addItemToCart: PropTypes.func.isRequired,
  cartList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductDetail;
