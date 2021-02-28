import { AnyAction, createStore } from "redux";
import { ToDo } from "./react-app-env";

const ADD = "ADD";
const DELETE = "DEL";

export const addToDo = (text: string) => {
  return {
    type: ADD,
    text,
    id: store.getState().length.toString(),
  };
};

export const deleteToDo = (id: string) => {
  return {
    type: DELETE,
    id,
  };
};

const reducer = (state: Array<ToDo> = [], { type, text, id }: AnyAction) => {
  switch (type) {
    case ADD:
      return [{ text, id }, ...state];
    case DELETE:
      return state.filter((toDo: ToDo) => toDo.id !== id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
