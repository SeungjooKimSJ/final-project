import React from 'react';

// export default function Home(props) {
//   return (
//     <>
//       <header>
//         <div className="header">
//           <a href="#" className="previous-page">
//             <i className="fas fa-caret-square-left"></i>
//           </a>
//           <h2 className="header-title">Clever Consumption</h2>
//           <div className="header-pig-icon">
//             <i className="fas fa-piggy-bank"></i>
//           </div>
//         </div>
//       </header>

//       <main>
//         <div className="year-and-month">
//           <div>
//             <i className="fas fa-chevron-left"></i>
//           </div>
//           <h2 className="year-and-month-h2">2021.05</h2>
//           <div>
//             <i className="fas fa-chevron-right"></i>
//           </div>
//         </div>
//         <div>
//           <ul>
//             <li><a href="#" className="li-anchor daily">Daily</a></li>
//             <li><a href="#" className="li-anchor weekly">Weekly</a></li>
//             <li><a href="#" className="li-anchor monthly">Monthly</a></li>
//             <li><a href="#" className="li-anchor calendar">Calendar</a></li>
//           </ul>
//         </div>
//         <div className="current-balance">
//           <div className="income">
//             <div className="current-income">Income</div>
//             <div className="income-amount">$ 0</div>
//           </div>
//           <div className="expenses">
//             <div className="current-expenses">Expenses</div>
//             <div className="expenses-amount">$ 0</div>
//           </div>
//           <div className="total">
//             <div className="current-total">Total</div>
//             <div className="total-amount">$ 0</div>
//           </div>
//         </div>
//         <div className="empty-container">
//           <div className="plus-icon-container">
//             <i className="fas fa-plus-circle"></i>
//           </div>
//         </div>
//       </main>

//       <footer>
//         <div>
//           <i className="far fa-folder-open"></i>
//         </div>
//         <div>
//           <i className="fas fa-chart-pie"></i>
//         </div>
//         <div>
//           <i className="fas fa-money-check-alt"></i>
//         </div>
//         <div>
//           <i className="fas fa-user-cog"></i>
//         </div>
//       </footer>
//     </>
//   );
// }

export default function Home(props) {
  return (
    <>
      <header>
        <div className="header">
          <a href="#" className="previous-page">
            <i className="fas fa-caret-square-left"></i>
          </a>
          <h2 className="header-title">Clever Consumption</h2>
          <div className="header-pig-icon">
            <i className="fas fa-piggy-bank"></i>
          </div>
        </div>
      </header>

      <form>
        <div className="button-holder-top">
          <div>
            <button className="deposit-btn">Deposit</button>
          </div>
          <div>
            <button className="withdraw-btn">Withdraw</button>
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
