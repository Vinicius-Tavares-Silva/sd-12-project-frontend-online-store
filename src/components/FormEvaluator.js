import React from 'react';

class FormEvaluator extends React.Component {
  constructor(props) {
    super(props);

    // this.handleChange = this.handleChange.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.loadLocalStorage = this.loadLocalStorage.bind(this);

    this.state = {
      email: '',
      textArea: '',
    };
  }

  // handleChange() {
  //   this.setState({ target: { value } });
  // }

  componentDidMount() {
    this.loadLocalStorage();
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeRating(e) {
    this.setState({ rating: e.target.value });
  }

  loadLocalStorage() {
    const localState = JSON.parse(localStorage.getItem('user'));
    if (localState === null) return null;
    this.setState(localState);
  }

  buttonClick() {
    localStorage.setItem('user', JSON.stringify(this.state));
  }

  render() {
    const { email, textArea } = this.state;

    return (
      <form className="card form-control-sm evaluator-form">
        <h2 className="card-header">Avaliações</h2>
        <label htmlFor="email">
          <input
            className="m-2"
            type="email"
            id="email"
            value={ email }
            placeholder="Email"
            onChange={ this.onChangeEmail }
          />
        </label>
        <label htmlFor="rating">
          <div className="m-2">
            <input
              className="m-1"
              name="rating"
              type="radio"
              value="1"
              onClick={ this.onChangeRating }
            />
            1
            <input
              className="m-1"
              name="rating"
              type="radio"
              value="2"
              onClick={ this.onChangeRating }
            />
            2
            <input
              className="m-1"
              name="rating"
              type="radio"
              value="3"
              onClick={ this.onChangeRating }
            />
            3
            <input
              className="m-1"
              name="rating"
              type="radio"
              value="4"
              onClick={ this.onChangeRating }
            />
            4
            <input
              className="m-1"
              name="rating"
              type="radio"
              value="5"
              onClick={ this.onChangeRating }
            />
            5
          </div>
        </label>
        <label htmlFor="textArea">
          <textarea
            className="m-2"
            data-testid="product-detail-evaluation"
            id="textArea"
            value={ textArea }
            placeholder="Mensagem (opcional)"
            onChange={ (event) => this.setState({ textArea: event.target.value }) }
          />
        </label>
        <div>  
          <button
            className="btn btn-warning m-2"
            type="submit"
            id="btn-form"
            onClick={ () => this.buttonClick() }
            >
            Avaliar
          </button>
        </div>
      </form>
    );
  }
}

export default FormEvaluator;
