import axios from "axios";
import { FETCH_USER, POST_DOCTOR, POST_SEARCH_VAL, FETCH_DOCTOR, POST_REVIEW, FETCH_REVIEWS } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitDoctorForm = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/newdoctor", values);

  history.push("/admin");
  dispatch({ type: POST_DOCTOR, payload: res.data });
};

export const postSearchValue = (value) => async (dispatch) => {
  const res = await axios.post("/api/searchdoctor", { value });

  dispatch({ type: POST_SEARCH_VAL, payload: res.data });
};

export const fetchDoctor = (doctorID) => async (dispatch) => {
  const res = await axios.post("/api/fetchdoctor", { doctorID });

  dispatch({ type: FETCH_DOCTOR, payload: res.data })
};

export const postReview = (id, reviewbody, stars) => async (dispatch) => {
  const res = await axios.post("/api/postreview", { id, reviewbody, stars });

  window.location.reload()
  dispatch({ type: POST_REVIEW, payload: res.data })
}

export const fetchReviews = (doctorID) => async (dispatch) => {
  const res = await axios.post("/api/fetchreviews", { doctorID });

  dispatch({ type: FETCH_REVIEWS, payload: res.data });
};
