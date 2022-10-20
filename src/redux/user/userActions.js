import axios from "axios";

import {
  FETCH_USERS_FAIULER,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

//actions
function fetchUserRequest() {
  return {
    type: FETCH_USERS_REQUEST,
  };
}

function fetchUserFaiuler(error) {
  return {
    type: FETCH_USERS_FAIULER,
    payload: error,
  };
}

function fetchUserSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
}

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users  ")
      .then((resp) => {
        const users = resp.data;
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUserFaiuler(error));
      });
  };
};
