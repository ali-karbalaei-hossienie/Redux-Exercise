import {
  FETCH_USERS_FAIULER,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

const initialState = {
  users: [],
  loading: false,
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { loading: true };
    case FETCH_USERS_FAIULER:
      return { loading: false, error: action.payload };
    case FETCH_USERS_SUCCESS:
      return { loading: false, error: "", users: action.payload };
    default:
      return state;
  }
};

export default userReducer;
