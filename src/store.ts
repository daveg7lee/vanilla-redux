import { createStore } from "redux";
import { reducerProps, ToDoType } from "./react-app-env";

const ADD = "ADD";
const DELETE = "DEL";

const addToDo = (text: string) => {
  return {
    type: ADD,
    text,
    id: store.getState().length.toString(),
  };
};

const deleteToDo = (id: string) => {
  return {
    type: DELETE,
    id,
  };
};

const reducer = (
  state: any = localStorage.getItem("toDos"),
  { type, text, id }: reducerProps
) => {
  switch (type) {
    case ADD:
      const addedToDos = [{ text, id }, ...state];
      localStorage.setItem("toDos", JSON.stringify(addedToDos));
      return addedToDos;
    case DELETE:
      const deletedToDo = state.filter((toDo: ToDoType) => toDo.id !== id);
      localStorage.setItem("toDos", JSON.stringify(deletedToDo));
      return deletedToDo;
    default:
      return JSON.parse(state);
  }
};

export const actionCreators = {
  addToDo,
  deleteToDo,
};

const store = createStore(reducer);

export default store;
