import React from 'react';
import FormControl from '../components/transaction-entry/form-control';

class TransactionEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      depositOn: false
    };
    this.handleClickDeposit = this.handleClickDeposit.bind(this);
    this.handleClickWithdraw = this.handleClickWithdraw.bind(this);
  }

  handleClickDeposit() {
    this.setState({
      depositOn: true
    });
  }

  handleClickWithdraw() {
    this.setState({
      depositOn: false
    });
  }

  renderFooter() {
    return (
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
    );
  }

  render() {
    const depositOn = this.state.depositOn;

    return (
      <>
        <header>
          <div className="header">
            <a href="#" className="previous-page">
              <i className="fas fa-caret-square-left"></i>
            </a>
            <HeaderStatus depositOn={depositOn} />
            <a href="#" className="header-pig-icon">
              <i className="fas fa-piggy-bank"></i>
            </a>
          </div>
          <div className="button-holder-top">
            <DepositBtn depositOn={this.state.depositOn} onClick={this.handleClickDeposit} />
            <WithdrawBtn depositOn={this.state.depositOn} onClick={this.handleClickWithdraw} />
          </div>

        </header>

        <FormControl depositOn={this.state.depositOn} />

        {this.renderFooter()}
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
  const depositOn = props.depositOn;
  if (depositOn) {
    return <HeaderDeposit />;
  } else {
    return <HeaderWithdraw />;
  }
}

function DepositBtn(props) {
  if (props.depositOn) {
    return (
      <button className="deposit-btn" onClick={props.onClick}>Deposit</button>
    );
  } else {
    return (
      <button className="deposit-btn btn-off" onClick={props.onClick}>Deposit</button>
    );
  }
}

function WithdrawBtn(props) {
  if (!props.depositOn) {
    return (
      <button className="withdraw-btn" onClick={props.onClick}>Withdraw</button>
    );
  } else {
    return (
      <button className="withdraw-btn btn-off" onClick={props.onClick}>Withdraw</button>
    );
  }
}

export default TransactionEntry;
