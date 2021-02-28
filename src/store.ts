import { createStore } from "redux";
import { reducerProps, ToDoType } from "./react-app-env";
import { createAction } from "@reduxjs/toolkit";

const addToDo = createAction<string, "ADD">("ADD");
const deleteToDo = createAction<string, "DEL">("DEL");

const reducer = (
  state: any = localStorage.getItem("toDos"),
  { type, payload }: reducerProps
) => {
  switch (type) {
    case addToDo.type:
      const addedToDos = [
        { text: payload, id: String(state.length) },
        ...state,
      ];
      localStorage.setItem("toDos", JSON.stringify(addedToDos));
      return addedToDos;
    case deleteToDo.type:
      const deletedToDo = state.filter((toDo: ToDoType) => toDo.id !== payload);
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
