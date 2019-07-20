import { FETCH_TODOS } from '../types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payload;

    default:
      return state;
  }
};
