import { FETCH_DOCTOR } from "../actions/types";

export default function (state = '', action) {
  console.log(action);
  switch (action.type) {
    case FETCH_DOCTOR:
      return action.payload;
    default:
      return state;
  }
}
