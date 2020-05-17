import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { countUp, countDown } from '../actions';

const Counter = () => {
  const { currentValue, clickCount } = useSelector(selector);
  const dispatch = useDispatch();

  const handlePlusButton = () => {
    dispatch(countUp(1));
  };

  const handleMinusButton = () => {
    dispatch(countDown(1));
  };

  return (
    <div>
      <h2>関数コンポーネント + Hooks</h2>
      <div>clickCount: {clickCount}</div>
      <div>
        <button onClick={(e) => { handleMinusButton(e); }}>-</button>
        <input type="text" value={currentValue} readOnly />
        <button onClick={(e) => { handlePlusButton(e); }}>+</button>
      </div>
    </div>
  );
};

const selector = state => {
  return {
    clickCount: state.counter.clickCount,
    currentValue: state.counter.currentValue,
  };
};

export default Counter;