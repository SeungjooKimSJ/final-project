import React from 'react';

class Daily extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionHistory: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('/api/transactions')
      .then(res => res.json())
      .then(transactionHistory => this.setState({
        transactionHistory: transactionHistory,
        isLoading: false
      }))
      .catch(err => console.error('Fetch failed!', err));
  }

  renderTransactionLi() {
    const transactionLi = this.state.transactionHistory;
    const liTransaction = transactionLi.map(transaction => {
      const timeString = transaction.date;
      const newDate = new Date(timeString);
      const dateOnly = newDate.getDate();
      const monthOnly = newDate.getMonth();
      const yearOnly = newDate.getFullYear();
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
            <div className="li-year-month">
              <div className="li-year">{yearOnly}</div>
              <div className="li-month">{monthOnly}</div>
              <div className="li-day">{dayName}</div>
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

  render() {
    // const toSumDeposit = (x, y) => {
    //   if (this.props.transaction.transactionType === 'Deposit') {
    //     x = this.props.transaction.amount;
    //   } else {
    //     y = this.props.transaction.amount;
    //   }
    //   const add = x + y;

    //   return add;
    // };
    // const sumDeposit = this.props.transaction.amount.reduce(toSumDeposit);

    return this.state.isLoading
      ? <p>Loading...</p>
      : <div>{this.renderTransactionLi()}</div>;
  }

}

export default Daily;
