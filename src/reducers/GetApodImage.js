import {
  FETCH_APOD_IMAGE,
  ADD_ERROR,
  LOADED,
  SHOW_MODAL
} from "../actions/index";

const intialState = {
  image: {
    copyright: "",
    date: "",
    explanation: "",
    hdurl: "",
    media_type: "",
    service_version: "",
    title: "",
    url: ""
  },
  date: "",
  error: "",
  loading: true,
  showModal: false
};

export default function(state = intialState, action) {
  switch (action.type) {
    case FETCH_APOD_IMAGE:
      return {
        image: action.payload,
        date: action.date,
        loading: true,
        showModal: false
      };
    case ADD_ERROR:
      return {
        error: action.error
      };

    case LOADED:
      return {
        ...state,
        loading: false
      };

    case SHOW_MODAL:
      return {
        ...state,
        showModal: action.showModalState
      };

    default:
      return state;
  }
}
