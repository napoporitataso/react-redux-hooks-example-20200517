import { COUNT_UP, COUNT_DOWN } from '../actions';

const initialState = {
  clickCount: 0,
  currentValue: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case COUNT_UP:
      return {
        clickCount: state.clickCount + 1,
        currentValue: state.currentValue + action.value
      };
    case COUNT_DOWN:
      return {
        clickCount: state.clickCount + 1,
        currentValue: state.currentValue - action.value
      };
    default:
      return state;
  }
}