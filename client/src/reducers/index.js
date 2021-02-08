import { combineReducers } from "redux";
import authReducer from "./authReducer";
import searchReducer from "./searchReducer";
import doctorReducer from "./doctorReducer";
import reviewReducer from "./reviewReducer";
import findReviewsReducer from "./findReviewsReducer"
import { reducer as reduxForm } from "redux-form";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  search: searchReducer,
  doctor: doctorReducer,
  review: reviewReducer,
  reviews: findReviewsReducer,
});
