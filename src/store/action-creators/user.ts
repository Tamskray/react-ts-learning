import axios from "axios";
import { Dispatch } from "redux";
import { UserActionTypes, UserAction } from "../../types/users";

("https://jsonplaceholder.typicode.com/users");

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCES,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: `Error ${e} !!!`,
      });
    }
  };
};
