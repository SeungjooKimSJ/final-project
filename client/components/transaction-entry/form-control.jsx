import React from 'react';

class FormControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      category: '',
      amount: '',
      description: '',
      'is-deposit-on': this.props.depositOn
    };
    this.handleDate = this.handleDate.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleSubmitDeposit = this.handleSubmitDeposit.bind(this);
    this.handleSubmitWithdraw = this.handleSubmitWithdraw.bind(this);
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
      amount: event.target.value
    });
  }

  handleDescription(event) {
    this.setState({
      description: event.target.value
    });
  }

  handleSubmitDeposit(event) {
    event.preventDefault();
    // console.log('Deposit:', this.state);
  }

  handleSubmitWithdraw(event) {
    event.preventDefault();
    // console.log('Withdraw:', this.state);
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
            <option value="food">Food</option>
            <option value="grocery">Grocery</option>
            <option value="payment">Payment</option>
            <option value="check">Check</option>
            <option value="shopping">Shopping</option>
            <option value="homegoods">Home Goods</option>
            <option value="healthy">Healthy</option>
            <option value="beauty">Beauty</option>
            <option value="transportation">Transportation</option>
            <option value="education">Education</option>
            <option value="entertainment">Entertainment</option>
            <option value="etc">Etc</option>
          </select>
          {/* <input type="text" id="category" name="category"
            value={this.state.category} onChange={this.handleCategory} /> */}
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
          <button className="cancel-btn">Cancel</button>
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
