import { createStore } from "redux";
import { ToDoType } from "./react-app-env";
import {
  ActionCreatorWithPayload,
  createAction,
  createReducer,
} from "@reduxjs/toolkit";

const addToDo: ActionCreatorWithPayload<string, "ADD"> = createAction<
  string,
  "ADD"
>("ADD");
const deleteToDo: ActionCreatorWithPayload<string, "DEL"> = createAction<
  string,
  "DEL"
>("DEL");

const reducer = createReducer(localStorage.getItem("toDos"), (builder) =>
  builder
    .addCase(addToDo, (state: any, { payload }) => {
      state.push({ text: payload, id: String(state.length) });
      localStorage.setItem("toDos", JSON.stringify(state));
    })
    .addCase(deleteToDo, (state: any, { payload }) => {
      const deletedToDo = state.filter((toDo: ToDoType) => toDo.id !== payload);
      localStorage.setItem("toDos", JSON.stringify(deletedToDo));
      return deletedToDo;
    })
    .addDefaultCase((state: any) => {
      return JSON.parse(state);
    })
);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

const store = createStore(reducer);

export default store;
