import React from 'react';
import { connect } from 'react-redux';

import { countUp, countDown } from '../actions'

class Counter extends React.Component {
  handlePlusButton() {
    this.props.countUp(1);
  }

  handleMinusButton() {
    this.props.countDown(1);
  }

  render() {
    const { currentValue, clickCount } = this.props;
    return (
      <div>
        <h2>クラスコンポーネント</h2>
        <div>clickCount: {clickCount}</div>
        <div>
          <button onClick={(e) => { this.handleMinusButton(e); }}>-</button>
          <input type="text" value={currentValue} readOnly />
          <button onClick={(e) => { this.handlePlusButton(e); }}>+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    clickCount: state.counter.clickCount,
    currentValue: state.counter.currentValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    countUp: function (value) {
      return dispatch(countUp(value));
    },
    countDown: function (value) {
      return dispatch(countDown(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
