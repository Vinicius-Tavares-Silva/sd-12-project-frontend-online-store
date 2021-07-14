import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import Form from '../components/Form';
import './ItemDetails.css';
import productsCart from '../services/data';

class ItemDetails extends Component {
  constructor() {
    super();

    this.state = {
      item: [],
      loading: true,
    };

    this.getItem = this.getItem.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.getItem(id);
  }

  getItem(id) {
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((response) => response.json()
        .then((data) => {
          this.setState({
            item: data,
            loading: false,
          });
        }));
  }

  render() {
    const { item, loading } = this.state;
    const { title, price, thumbnail } = item;
    return (
      <div>
        { loading && <Loading />}
        <main className="item-details">
          <div className="item-details-left">
            <h1
              className="item-details-title"
              data-testid="product-detail-name"
            >
              { title }
            </h1>
            <img className="item-details-image" src={ thumbnail } alt={ title } />
            <h2 className="item-details-price">
              { `R$${price}` }
            </h2>
            <button
              type="button"
              data-testid="product-detail-add-to-cart"
              onClick={ () => productsCart.push(item) }
            >
              Adicionar ao carrinho
            </button>
          </div>
          <div className="item-details-right">
            <h2>Especificações Técnicas</h2>
          </div>
        </main>
        <div className="item-details-form">
          <Form />
        </div>
      </div>
    );
  }
}

ItemDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ItemDetails;
