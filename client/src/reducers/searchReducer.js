import { POST_SEARCH_VAL } from '../actions/types';

export default function (state = [], action) {
  console.log(action)
  switch (action.type) {
    case POST_SEARCH_VAL:
      return action.payload;
    default:
      return state;
  }
}
