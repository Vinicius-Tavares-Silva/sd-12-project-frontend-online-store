import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Loading from './Loading';

class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      itens: [],
    };
    this.handleFirstChangeInput = this.handleFirstChangeInput.bind(this);
    // this.handleFutureInputs = this.handleFutureInputs.bind(this);
  }

  componentDidMount() {
    this.handleFirstChangeInput();
  }

  // componentDidUpdate() {
  //   const { input } = this.props;
  //   const { itens } = this.state;
  //   if (input !== itens) {
  //     this.handleFutureInputs(input);
  //   }
  // }

  // async handleFutureInputs(input) {
  //   const item = await getProductsFromCategoryAndQuery(false, input);
  //   this.setState(() => ({ itens: item }));
  // }

  async handleFirstChangeInput() {
    const { input } = this.props;
    const item = await getProductsFromCategoryAndQuery(false, input);
    this.setState(() => ({ itens: item }));
    console.log(item);
  }

  render() {
    const { itens } = this.state;
    if (itens === undefined) return <Loading />;
    if ((itens.length === 0)) {
      return <p>Nenhum produto foi encontrado</p>;
    }
    return (
      <div>
        <div>
          {itens.results.map((item) => (
            <ItemCard item={ item } key={ item.id } />
          ))}
        </div>
      </div>
    );
  }
}

ItemList.propTypes = {
  input: PropTypes.string.isRequired,
};

export default ItemList;
