import React from 'react';

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

      <main>
        <div className="year-and-month">
          <div>
            <i className="fas fa-chevron-left"></i>
          </div>
          <h2 className="year-and-month-h2">2021.05</h2>
          <div>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        <div>
          <ul>
            <li><a href="#">Daily</a></li>
            <li><a href="#">Weekly</a></li>
            <li><a href="#">Monthly</a></li>
            <li><a href="#">Calendar</a></li>
          </ul>
        </div>
        <div>
          <div>
            <div>Income</div>
            <div>$0</div>
          </div>
          <div>
            <div>Expenses</div>
            <div>$0</div>
          </div>
          <div>
            <div>Total</div>
            <div>$0</div>
          </div>
        </div>
      </main>

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

// export default class Home extends React.Component {
//   render() {
//     return (
//       <h1>Hello</h1>
//       <hr />
//       <button>Click this</button>
//     );
//   }
// }
