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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      date: event.target.date,
      category: event.target.category,
      amount: event.target.amount,
      description: event.target.description
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log('state', this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
            <input required type="text" id="date" name="date"
            date={this.state.date} onChange={this.handleChange} />
          </div>
        </div>
        <div className="category-holder">
          <label htmlFor="category">Category</label>
          <div className="input-holder-2">
            <input required type="text" id="category" name="category"
            category={this.state.category} onChange={this.handleChange} />
          </div>
        </div>
        <div className="amount-holder">
          <label htmlFor="amount">Amount</label>
          <div className="input-holder-3">
            <input required type="text" id="amount" name="amount"
            amount={this.state.amount} onChange={this.handleChange} />
          </div>
        </div>
        <div className="description-holder">
          <label htmlFor="description">Description</label>
          <div className="input-holder-4">
            <input required type="text" id="description" name="description"
            description={this.state.description} onChange={this.handleChange} />
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
