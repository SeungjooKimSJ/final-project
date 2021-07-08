import React from 'react';

class TotalBalance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionHistory: []
    };
  }

  componentDidMount() {
    fetch('/api/transactions')
      .then(res => res.json())
      .then(transactionHistory => this.setState({
        transactionHistory: transactionHistory
      }))
      .catch(err => console.error('Fetch failed!', err));
  }

  render() {
    const getSumDeposit = (deposit, transactionHistory) => {
      if (transactionHistory.transactionType === 'Deposit') {
        deposit += transactionHistory.amount;
      }
      return deposit;
    };
    const sumDeposit = this.state.transactionHistory.reduce(getSumDeposit, 0);

    const getSumWithdraw = (withdraw, transactionHistory) => {
      if (transactionHistory.transactionType === 'Withdraw') {
        withdraw += transactionHistory.amount;
      }
      return withdraw;
    };
    const sumWithdraw = this.state.transactionHistory.reduce(getSumWithdraw, 0);

    const getBalance = (balance, transactionHistory) => {
      if (transactionHistory.transactionType === 'Deposit') {
        balance += transactionHistory.amount;
      } else {
        balance -= transactionHistory.amount;
      }
      return balance;
    };
    const balance = this.state.transactionHistory.reduce(getBalance, 0);

    return (
      <>
        <div className="current-balance">
          <div className="income">
            <div className="current-income">Income</div>
            <div className="income-amount">${sumDeposit}</div>
          </div>
          <div className="expenses">
            <div className="current-expenses">Expenses</div>
            <div className="expenses-amount">${sumWithdraw}</div>
          </div>
          <div className="total">
            <div className="current-total">Balance</div>
            <div className="total-amount">${balance}</div>
          </div>
        </div>
      </>
    );
  }
}

export default TotalBalance;
