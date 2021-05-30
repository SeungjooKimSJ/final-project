import React from 'react';

class TransactionEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onClick: false,
      mode: 'deposit'
    };
    this.handleClickDeposit = this.handleClickDeposit.bind(this);
    this.handleClickWithdraw = this.handleClickWithdraw.bind(this);
    this.handleWithdrawClick = this.handleWithdrawClick.bind(this);
    this.handleDepositClick = this.handleDepositClick.bind(this);
  }

  handleClickDeposit() {
    this.setState({
      onClick: true
    });
  }

  handleClickWithdraw() {
    this.setState({
      onClick: false
    });
  }

  handleWithdrawClick() {
    this.setState({
      mode: 'withdraw'
    });
  }

  handleDepositClick() {
    this.setState({
      mode: 'deposit'
    });
  }

  render() {
    const onClick = this.state.onClick;
    let button;
    // const mode = this.state.mode;

    if (onClick) {
      button = <WithdrawBtn onClick={this.handleWithdrawClick} />;
    } else {
      button = <DepositBtn onClick={this.handleDepositClick} />;
    }

    return (
      <>
        <header>
          <div className="header">
            <a href="#" className="previous-page">
              <i className="fas fa-caret-square-left"></i>
            </a>
            <HeaderStatus onClick={onClick} />
            <div className="header-pig-icon">
              <i className="fas fa-piggy-bank"></i>
            </div>
          </div>
        </header>

        <form>
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
              <input required type="text" id="date" />
            </div>
          </div>
          <div className="category-holder">
            <label htmlFor="category">Category</label>
            <div className="input-holder-2">
              <input required type="text" id="category" />
            </div>
          </div>
          <div className="amount-holder">
            <label htmlFor="amount">Amount</label>
            <div className="input-holder-3">
              <input required type="text" id="amount" />
            </div>
          </div>
          <div className="description-holder">
            <label htmlFor="description">Description</label>
            <div className="input-holder-4">
              <input required type="text" id="description" />
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

        <div className="empty-container2">

        </div>

        <footer>
          <div>
            <i className="far fa-folder-open"></i>
          </div>
          <div>
            <i className="fas fa-chart-pie"></i>
          </div>
          <div>
            <i className="fas fa-money-check-alt"></i>
          </div>
          <div>
            <i className="fas fa-user-cog"></i>
          </div>
        </footer>
      </>
    );
  }
}

function HeaderDeposit(props) {
  return (
    <h2 className="header-title">Deposit</h2>
  );
}

function HeaderWithdraw(props) {
  return (
    <h2 className="header-title">Withdraw</h2>
  );
}

function HeaderStatus(props) {
  const onClick = props.onClick;
  if (onClick) {
    return <HeaderDeposit />;
  } else {
    return <HeaderWithdraw />;
  }
}

function DepositBtn(props) {
  return (
    <button className="deposit-btn" onClick={props.onClick}>Deposit</button>
  );
}

function WithdrawBtn(props) {
  return (
    <button className="deposit-btn" onClick={props.onClick}>Withdraw</button>
  );
}

export default TransactionEntry;
