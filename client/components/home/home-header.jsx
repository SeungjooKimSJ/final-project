import React from 'react';

export default function HomeHeader(props) {
  return (
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
  );
}
