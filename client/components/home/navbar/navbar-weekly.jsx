import React from 'react';
// import Weekly from '../expenditure-history/weekly';
import HomeFooter from '../home-footer';
import HomeHeader from '../home-header';

class NavbarWeekly extends React.Component {
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
        <HomeHeader />

        <main>
          <div className="year-and-month">
            <div>
              <i className="fas fa-chevron-left"></i>
            </div>
            <h2 className="year-and-month-h2">2021. 06</h2>
            <div>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
          <div>
            <ul>
              <li><a href="#daily" className="li-anchor">Daily</a></li>
              <li><a href="#weekly" className="li-anchor-active">Weekly</a></li>
              <li><a href="#" className="li-anchor">Monthly</a></li>
              <li><a href="#" className="li-anchor">Calendar</a></li>
            </ul>
          </div>
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
          <div className="list-and-icon-container">
            {/* <Weekly /> */}
            <div className="plus-icon-container">
              <a href="#add-transaction">
                <i className="fas fa-plus-circle"></i>
              </a>
            </div>
          </div>
        </main>

        <HomeFooter />
      </>
    );
  }

}

export default NavbarWeekly;
