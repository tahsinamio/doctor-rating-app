import { FETCH_REVIEWS } from "../actions/types";

export default function (state = [], action) {
  console.log(action);
  switch (action.type) {
    case FETCH_REVIEWS:
      return action.payload;
    default:
      return state;
  }
}
