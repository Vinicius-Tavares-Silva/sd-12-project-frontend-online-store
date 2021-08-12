import React, { Component } from 'react';

class Checkout extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   name: '',
    //   email: '',
    //   cpf: '',
    //   phone: '',
    //   cep: '',
    //   address: '',
    //   method: '',
    // };
    this.renderFormInfos = this.renderFormInfos.bind(this);
  }

  renderFormInfos() {
    return (
      <form>
        <label htmlFor="name">
          <input
            data-testid="checkout-fullname"
            placeholder="Nome completo"
            id="name"
            type="text"
            // onChange={ (event) => this.setState({ name: event.target.value }) }
          />
        </label>
        <label htmlFor="email">
          <input
            data-testid="checkout-email"
            placeholder="e-mail"
            id="email"
            type="text"
            // onChange={ (event) => this.setState({ email: event.target.value }) }
          />
        </label>
        <label htmlFor="cpf">
          <input
            data-testid="checkout-cpf"
            placeholder="CPF"
            id="cpf"
            type="text"
            // onChange={ (event) => this.setState({ cpf: event.target.value }) }
          />
        </label>
        <label htmlFor="phone">
          <input
            data-testid="checkout-phone"
            placeholder="Telefone"
            id="phone"
            type="text"
            // onChange={ (event) => this.setState({ phone: event.target.value }) }
          />
        </label>
        <label htmlFor="cep">
          <input
            data-testid="checkout-cep"
            placeholder="cep"
            id="cep"
            type="text"
            // onChange={ (event) => this.setState({ cep: event.target.value }) }
          />
        </label>
        <label htmlFor="address">
          <input
            data-testid="checkout-address"
            placeholder="Endereço"
            id="address"
            type="text"
            // onChange={ (event) => this.setState({ address: event.target.value }) }
          />
        </label>
        <button type="button">Comprar</button>
      </form>
    );
  }

  renderPaymentMethod() {
    return (
      <form>
        <label htmlFor="method">
          Forma de pagamento:
          <select
            id="method"
            // onChange={ (event) => this.setState({ method: event.target.value }) }
          >
            <option value="boleto">Boleto</option>
            <option value="visa">Visa</option>
            <option value="mastercard">MasterCard</option>
            <option value="elo">Elo</option>
          </select>
        </label>
      </form>
    );
  }

  render() {
    return (
      <div>
        {this.renderFormInfos()}
      </div>
    );
  }
}

export default Checkout;
