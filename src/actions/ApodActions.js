import { FETCH_APOD_IMAGE, ADD_ERROR, SHOW_MODAL } from "./index";
import { parseDate } from "../common";

export const fetchApodImage = date => dispatch => {
  fetch(
    `https://api.nasa.gov/planetary/apod?${
      date ? "date=" + date : ""
    }&api_key=xkBToPDdMMm7cBcJFJGhgKf0gPpODV3rf68qVeSr`
  )
    .then(res => res.json())
    .then(photoData => {
      if (photoData.code) {
        dispatch({ type: ADD_ERROR, error: photoData.msg });
      } else {
        dispatch({
          type: FETCH_APOD_IMAGE,
          payload: photoData,
          date: parseDate(date)
        });
      }
    })
    .catch(err => {
      // Dispatch the generic "global errors" action
      dispatch({ type: ADD_ERROR, error: err });
    });
};

export const showModal = showModalState => dispatch => {
  dispatch({
    type: SHOW_MODAL,
    showModalState: showModalState
  });
};

// xkBToPDdMMm7cBcJFJGhgKf0gPpODV3rf68qVeSr
