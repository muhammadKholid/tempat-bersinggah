import { SEND_EMAIL } from '../actions/Types';

const initialState = {
  result: '',
};

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case SEND_EMAIL:
      return { ...state, result: action.payload };
    default:
      return state;
  }
};

export default Reducers;
