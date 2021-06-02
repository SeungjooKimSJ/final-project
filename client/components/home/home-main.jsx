import React from 'react';

// class HomeMain extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       addOn:
//     };

//   }

//   handleAddTransaction() {

//   }

//   render() {
//     return (

//     );
//   }
// }

// export default HomeMain;

export default function HomeMain(props) {
  return (
    <main>
      <div className="year-and-month">
        <div>
          <i className="fas fa-chevron-left"></i>
        </div>
        <h2 className="year-and-month-h2">2021. 05</h2>
        <div>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
      <div>
        <ul>
          <li><a href="#" className="li-anchor daily">Daily</a></li>
          <li><a href="#" className="li-anchor weekly">Weekly</a></li>
          <li><a href="#" className="li-anchor monthly">Monthly</a></li>
          <li><a href="#" className="li-anchor calendar">Calendar</a></li>
        </ul>
      </div>
      <div className="current-balance">
        <div className="income">
          <div className="current-income">Income</div>
          <div className="income-amount">$ 0</div>
        </div>
        <div className="expenses">
          <div className="current-expenses">Expenses</div>
          <div className="expenses-amount">$ 0</div>
        </div>
        <div className="total">
          <div className="current-total">Total</div>
          <div className="total-amount">$ 0</div>
        </div>
      </div>
      <div className="empty-container">
        <div className="plus-icon-container">
          <i className="fas fa-plus-circle"></i>
        </div>
      </div>
    </main>
  );
}
