import React from 'react';
// import Weekly from '../expenditure-history/weekly';
import HomeFooter from '../home-footer';
import HomeHeader from '../home-header';
import TotalBalance from '../total-balance';

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
              <li><a href="#monthly" className="li-anchor">Monthly</a></li>
              <li><a href="#calendar" className="li-anchor">Calendar</a></li>
            </ul>
          </div>
          <TotalBalance />
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
