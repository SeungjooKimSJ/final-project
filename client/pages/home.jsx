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
//           <h2 className="year-and-month-h2">2021. 05</h2>
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

//       <form>
//         <div className="button-holder-top">
//           <div>
//             <button className="deposit-btn">Deposit</button>
//           </div>
//           <div>
//             <button className="withdraw-btn">Withdraw</button>
//           </div>
//         </div>

//         <div className="date-holder">
//           <label htmlFor="date">Date</label>
//           <div className="input-holder-1">
//             <input required type="text" id="date" />
//           </div>
//         </div>
//         <div className="category-holder">
//           <label htmlFor="category">Category</label>
//           <div className="input-holder-2">
//             <input required type="text" id="category" />
//           </div>
//         </div>
//         <div className="amount-holder">
//           <label htmlFor="amount">Amount</label>
//           <div className="input-holder-3">
//             <input required type="text" id="amount" />
//           </div>
//         </div>
//         <div className="description-holder">
//           <label htmlFor="description">Description</label>
//           <div className="input-holder-4">
//             <input required type="text" id="description" />
//           </div>
//         </div>

//         <div className="button-holder-bottom">
//           <div>
//             <button className="cancel-btn">Cancel</button>
//           </div>
//           <div>
//             <button className="save-btn">Save</button>
//           </div>
//         </div>
//       </form>

//       <div className="empty-container2">

//       </div>

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

class Home extends React.Component {
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
    const mode = this.state.mode;

    if (onClick) {
      button = <WithdrawBtn onClick={this.handleClickWithdraw} />;
    } else {
      button = <DepositBtn onClick={this.handleClickDeposit} />;
    }

    return (
      <>
      <header>
        <div className="header">
          <a href="#" className="previous-page">
            <i className="fas fa-caret-square-left"></i>
          </a>
          <HeaderStatus onClick={mode} />
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
            <button className="withdraw-btn" onClick={this.handleClickWithdraw}>Withdraw</button>
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

// function BtnStatus(props) {
//   const mode = props.mode;
//   if (mode) {
//     return <DepositBtn />;
//   } else {
//     return <WithdrawBtn />;
//   }
// }

// class StatusBtn extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       depositOn: true
//     };
//     this.handleStatusBtn = this.handleStatusBtn.bind(this);
//   }

//   handleStatusBtn() {
//     if (!this.state.depositOn) {
//       this.setState({
//         depositOn: true
//       });
//     } else {
//       this.setState({
//         depositOn: false
//       });
//     }
//   }

//   render() {
//     const depositOn = this.state.depositOn;

//     return (
//       <StatusBtn>{depositOn ? 'Deposit' : 'Withdraw'}</StatusBtn>
//     );
//   }
// } /* example */

// class Home extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isClicked: false
//     };
//     this.handleClickDeposit = this.handleClickDeposit.bind(this);
//     this.handleClickWithdraw = this.handleClickWithdraw.bind(this);
//   }

//   handleClickDeposit() {
//     this.setState({
//       isClicked: true
//     });
//   }

//   handleClickWithdraw() {
//     this.setState({
//       isClicked: false
//     });
//   }

//   render() {
//     const isClicked = this.state.isClicked;
//     let button;

//     if (isClicked) {
//       return (
//         <header>
//           <div className="header">
//             <a href="#" className="previous-page">
//               <i className="fas fa-caret-square-left"></i>
//             </a>
//             <h2 className="header-title">{isClicked ? 'Withdraw' : 'Deposit'}</h2>
//             <div className="header-pig-icon">
//               <i className="fas fa-piggy-bank"></i>
//             </div>
//           </div>
//       </header>

//         <button className="deposit-btn" onClick="{this.handleClickDeposit}">Deposit</button>
//       );
//     } else {
//       return (
//         <header>
//           <div className="header">
//             <a href="#" className="previous-page">
//               <i className="fas fa-caret-square-left"></i>
//             </a>
//             <h2 className="header-title">Withdraw</h2>
//             <div className="header-pig-icon">
//               <i className="fas fa-piggy-bank"></i>
//             </div>
//           </div>
//       </header>
//         <button className="withdraw-btn" onClick="{this.handleClickWithdraw}">Withdraw</button>
//       );
//     }
//   }
// }

// function ClickedDeposit(props) {
//   return (
//     <h2 className="header-title">Withdraw</h2>
//   );
// }

// function ClickedWithdraw(props) {
//   return (
//     <h2 className="header-title">Deposit</h2>
//   );
// }

// function DepositAndWithdraw(props) {
//   const isClicked = props.isClicked;
//   if (isClicked) {
//     return (
//       <ClickedDeposit />;
//     );
//   } else {
//     return (
//       <ClickedWithdraw />;
//     );
//   }
// }

export default Home;
