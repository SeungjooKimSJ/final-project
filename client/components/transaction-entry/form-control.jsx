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
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();
    console.log('state', this.state);
  }

  render() {
    return (
      <form onSubmit={this.props.depositOn === true ? this.handleSubmit : this.handleSubmit2}>
        <div className="button-holder-top">
          <div>
            <button className="deposit-btn" onClick={this.handleClickDeposit}>Deposit</button>
          </div>
          <div>
            <button className="withdraw-btn" onClick={this.handleClickWithdrawk}>Withdraw</button>
          </div>
        </div>

        <div className="date-holder">
          <label htmlFor="date">Date</label>
          <div className="input-holder-1">
            <input type="text" id="date" name="date"
            value={this.state.date} onChange={this.handleDate} />
          </div>
        </div>
        <div className="category-holder">
          <label htmlFor="category">Category</label>
          <div className="input-holder-2">
            <input type="text" id="category" name="category"
            value={this.state.category} onChange={this.handleCategory} />
          </div>
        </div>
        <div className="amount-holder">
          <label htmlFor="amount">Amount</label>
          <div className="input-holder-3">
            <input type="text" id="amount" name="amount"
            value={this.state.amount} onChange={this.handleAmount} />
          </div>
        </div>
        <div className="description-holder">
          <label htmlFor="description">Description</label>
          <div className="input-holder-4">
            <input type="text" id="description" name="description"
            value={this.state.description} onChange={this.handleDescription} />
          </div>
        </div>

        <div className="button-holder-bottom">
          <div>
            <button className="cancel-btn">Cancel</button>
          </div>
          <div>
            <button className="save-btn">Save</button>
          </div>
        </div>
      </form>
    );
  }
}

export default FormControl;
