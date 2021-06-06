import React from 'react';

class Daily extends React.Component {
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
    // const getDailyDeposit = (deposit, transactionHistory) => {
    //   // If transactionHistory's type is 'Deposit', and also date is same <<
    //   if (transactionHistory.transactionType === 'Deposit' && transactionHistory.totalPerDay) {
    //     deposit += transactionHistory.amount;
    //   }
    //   return deposit;
    // };
    // const dailyDeposit = this.state.transactionHistory.reduce(getDailyDeposit, 0);

    const transactionLi = this.state.transactionHistory;
    const liTransaction = transactionLi.map(transaction => {
      const timeString = transaction.date;
      const newDate = new Date(timeString);
      const dateOnly = newDate.getDate();
      const monthOnly = newDate.getMonth();
      const yearOnly = newDate.getFullYear();
      const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
      const month = months[monthOnly];
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dayName = days[newDate.getDay()];

      let amountStatus;
      if (transaction.transactionType === 'Deposit') {
        amountStatus = <div className="blue">${transaction.amount}</div>;
      } else {
        amountStatus = <div className="red">${transaction.amount}</div>;
      }

      return (
        <li key={transaction.transactionId} className="transaction-li">
          <div className="daily-li">
            <div className="li-date">
              {dateOnly}
            </div>
            <div className="li-year-month-day">
              <div className="li-year-month">{yearOnly} . {month}</div>
              <div className="li-week-of-day">{dayName}</div>
            </div>
            <div className="daily-balance">
              <div className="blue-total">$ 0</div>
              <div className="red-total">$ 0</div>
            </div>
          </div>
          <div className="each-transaction">
            <div className="li-category-description-amount">
              <div className="li-category">
                {transaction.category}
              </div>
              <div className="li-description">
                {transaction.description}
              </div>
              <div className="li-amount">
                {amountStatus}
              </div>
            </div>
          </div>
        </li>
      );

    });

    return (
      <ul className="transaction-ul">
        {liTransaction}
      </ul>
    );
  }

}

export default Daily;
