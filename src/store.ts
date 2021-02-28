import { AnyAction, createStore } from "redux";
import { ToDo } from "./react-app-env";

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

export const actionCreators = {
  addToDo,
  deleteToDo,
};

const store = createStore(reducer);

export default store;
