import axios from "axios";
import { Dispatch } from "redux";
import { TodoAction, TodoActionTypes } from "../../types/todo";

("https://jsonplaceholder.typicode.com/todos");

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODO });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        { params: { _page: page, _limit: limit } }
      );
      dispatch({
        type: TodoActionTypes.FETCH_TODO_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: TodoActionTypes.FETCH_TODO_ERROR,
        payload: `Error ${e} !!!`,
      });
    }
  };
};

export const setTodoPage = (page: number): TodoAction => {
  return { type: TodoActionTypes.SET_TODO_PAGE, payload: page };
};
