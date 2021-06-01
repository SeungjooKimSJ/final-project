import React from 'react';

class CalendarModal extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   };
  // }

  render() {
    return (
      <div className="calendar-content">
        <div className="modal-calendar">
          <div className="calendar-left-arrow">
            <i className="fas fa-chevron-left calendar"></i>
          </div>
          <h2 className="calendar-h2">2021. 05</h2>
          <div className="calendar-right-arrow">
            <i className="fas fa-chevron-right calendar"></i>
          </div>
        </div>
        <ul className="day-of-the-week">
          <li className="each-days">Sun</li>
          <li className="each-days">Mon</li>
          <li className="each-days">Tues</li>
          <li className="each-days">Weds</li>
          <li className="each-days">Thurs</li>
          <li className="each-days">Fri</li>
          <li className="each-days">Sat</li>
        </ul>
        <ul className="date-of-the-month">
          <li className="each-date">1</li>
          <li className="each-date">2</li>
          <li className="each-date">3</li>
          <li className="each-date">4</li>
          <li className="each-date">5</li>
          <li className="each-date">6</li>
          <li className="each-date">7</li>
          <li className="each-date">8</li>
          <li className="each-date">9</li>
          <li className="each-date">10</li>
          <li className="each-date">11</li>
          <li className="each-date">12</li>
          <li className="each-date">13</li>
          <li className="each-date">14</li>
          <li className="each-date">15</li>
          <li className="each-date">16</li>
          <li className="each-date">17</li>
          <li className="each-date">18</li>
          <li className="each-date">19</li>
          <li className="each-date">20</li>
          <li className="each-date">21</li>
          <li className="each-date">22</li>
          <li className="each-date">23</li>
          <li className="each-date">24</li>
          <li className="each-date">25</li>
          <li className="each-date">26</li>
          <li className="each-date">27</li>
          <li className="each-date">28</li>
          <li className="each-date">29</li>
          <li className="each-date">30</li>
          <li className="each-date">31</li>
        </ul>

        <div className="modal-buttons">

        </div>
      </div>
    );
  }
}

export default CalendarModal;
