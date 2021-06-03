import React from 'react';

class FormControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      category: '',
      amount: '',
      description: ''
    };
    this.handleDate = this.handleDate.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleSubmitDeposit = this.handleSubmitDeposit.bind(this);
    this.handleSubmitWithdraw = this.handleSubmitWithdraw.bind(this);
    this.cancelButton = this.cancelButton.bind(this);
  }

  handleDate(event) {
    this.setState({
      date: event.target.value
    });
  }

  handleCategory(event) {
    this.setState({
      category: event.target.value
    });
  }

  handleAmount(event) {
    this.setState({
      amount: parseInt(event.target.value)
    });
  }

  handleDescription(event) {
    this.setState({
      description: event.target.value
    });
  }

  cancelButton(event) {
    this.setState({
      date: '',
      category: '',
      amount: '',
      description: ''
    });
    window.location.hash = '#';
  }

  handleSubmitDeposit(event) {
    event.preventDefault();

    const depositData = {
      date: this.state.date,
      category: this.state.category,
      amount: parseInt(this.state.amount),
      description: this.state.description,
      status: 'Income',
      transactionType: 'Deposit'
    };

    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    const bodyJSON = JSON.stringify(depositData);
    const req = {
      method: 'POST',
      headers: headers,
      body: bodyJSON
    };

    fetch('/api/transactions', req)
      .then(res => res.json())
      .then(transaction => {
        this.setState({
          transaction: depositData
        });
      });
  }

  handleSubmitWithdraw(event) {
    event.preventDefault();

    const withdrawData = {
      date: this.state.date,
      category: this.state.category,
      amount: parseInt(this.state.amount),
      description: this.state.description,
      status: 'Expenses',
      transactionType: 'Withdraw'
    };

    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    const bodyJSON = JSON.stringify(withdrawData);
    const req = {
      method: 'POST',
      headers: headers,
      body: bodyJSON
    };

    fetch('/api/transactions', req)
      .then(res => res.json())
      .then(transaction => {
        this.setState({
          transaction: withdrawData
        });
      });
  }

  renderDateHolder() {
    return (
      <div className="date-holder">
        <label htmlFor="date">Date</label>
        <div className="input-holder-1">
          <input type="date" min="2020-01-01" max="2022-12-31"
            id="date" name="date" required
            value={this.state.date} onChange={this.handleDate} />
        </div>
      </div>
    );
  }

  renderCategoryHolder() {
    return (
      <div className="category-holder">
        <label htmlFor="category">Category</label>
        <div className="input-holder-2">
          <select id="category" name="category" required
          value={this.state.category} onChange={this.handleCategory}>
            <option value="">Select</option>
            <option value="Food">Food</option>
            <option value="Grocery">Grocery</option>
            <option value="Payment">Payment</option>
            <option value="Check">Check</option>
            <option value="Shopping">Shopping</option>
            <option value="Homegoods">Home Goods</option>
            <option value="Healthy">Healthy</option>
            <option value="Beauty">Beauty</option>
            <option value="Transportation">Transportation</option>
            <option value="Education">Education</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Etc">Etc</option>
          </select>
        </div>
      </div>
    );
  }

  renderAmountHolder() {
    return (
      <div className="amount-holder">
        <label htmlFor="amount">Amount</label>
        <div className="input-holder-3">
          <input type="text" id="amount" name="amount" required
            value={this.state.amount} onChange={this.handleAmount} />
        </div>
      </div>
    );
  }

  renderDescriptionHolder() {
    return (
      <div className="description-holder">
        <label htmlFor="description">Description</label>
        <div className="input-holder-4">
          <input type="text" id="description" name="description" required
            value={this.state.description} onChange={this.handleDescription} />
        </div>
      </div>
    );
  }

  renderButtonHolderBottom() {
    return (
      <div className="button-holder-bottom">
        <div>
          <button className="cancel-btn" onClick={this.cancelButton}>Cancel</button>
        </div>
        <div>
          <button className="save-btn">Save</button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <form onSubmit={this.props.depositOn === true ? this.handleSubmitDeposit : this.handleSubmitWithdraw}>
        {this.renderDateHolder()}

        {this.renderCategoryHolder()}

        {this.renderAmountHolder()}

        {this.renderDescriptionHolder()}

        {this.renderButtonHolderBottom()}
      </form>
    );
  }
}

export default FormControl;
