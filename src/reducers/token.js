import {INCREMENT_TOKEN} from '../actions/token';

const initialState = {
  tokenValue: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_TOKEN:
      return {...state, tokenValue: action.value};
    default:
      return state;
  }
};
