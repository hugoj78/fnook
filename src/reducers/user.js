import {INCREMENT_USER} from '../actions/user';

const initialState = {
  userValue: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_USER:
      return {...state, userValue: action.value};
    default:
      return state;
  }
};
