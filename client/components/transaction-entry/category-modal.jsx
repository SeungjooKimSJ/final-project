import React from 'react';

class CategoryModal extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     onChange:
  //   };
  // }

  renderCategoryBtns() {
    return (
      <>
        <button className="each-btn">Food</button>
        <button className="each-btn">Grocery</button>
        <button className="each-btn">Payment</button>
        <button className="each-btn">Check</button>
        <button className="each-btn">Shopping</button>
        <button className="each-btn">Home goods</button>
        <button className="each-btn">Health</button>
        <button className="each-btn">Beauty</button>
        <button className="each-btn">Transportation</button>
        <button className="each-btn">Education</button>
        <button className="each-btn">Entertainment</button>
        <button className="each-btn">Etc</button>
      </>
    );
  }

  render() {
    return (
      <div className="modal-content">
        <div className="modal-category">
          <h2 className="modal-h2">Category</h2>
        </div>
        <div className="modal-buttons">
          {this.renderCategoryBtns()}
        </div>
      </div>
    );
  }
}

export default CategoryModal;
