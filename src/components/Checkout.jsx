import React from 'react';
import PropTypes from 'prop-types';
import Form1 from './Form1';
import Form2 from './Form2';
import CartItems from './CartItems';

// prettier-ignore
export default class Checkout extends React.Component {
  render() {
    const { cartItems, handlers } = this.props;
    return (
      <div>
        <CartItems cartItems={ cartItems } handlers={ handlers } showButtons="false" />
        <Form1 />
        <Form2 />
      </div>
    );
  }
}

// prettier-ignore
Checkout.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      forEach: PropTypes.func,
      length: PropTypes.number,
    }),
  ).isRequired,
  handlers: PropTypes.shape({
    remove: PropTypes.func,
    increase: PropTypes.func,
    decrease: PropTypes.func,
  }).isRequired,
};