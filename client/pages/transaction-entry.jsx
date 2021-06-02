import React from 'react';
import FormControl from '../components/transaction-entry/form-control';
import CategoryModal from '../components/transaction-entry/category-modal';

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

  renderCategoryModal() {
    return (
      <div className="modal-container hidden">
        <CategoryModal />
      </div>
    );
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
    // const onClick = this.state.onClick;
    // let button;

    if (depositOn) {
      <WithdrawBtn onClick={this.handleClickWithdraw} />;
    } else {
      <DepositBtn onClick={this.handleClickDeposit} />;
    }

    return (
      <>
        <header>
          <div className="header">
            <a href="#" className="previous-page">
              <i className="fas fa-caret-square-left"></i>
            </a>
            <HeaderStatus depositOn={depositOn} />
            <div className="header-pig-icon">
              <i className="fas fa-piggy-bank"></i>
            </div>
          </div>
        </header>

        <FormControl depositOn={this.state.depositOn} />

        {this.renderCategoryModal()}

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
