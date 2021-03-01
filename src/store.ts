import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ToDoType } from "./react-app-env";

const initialState: string | null = localStorage.getItem("toDos");

const toDos = createSlice({
  name: "toDosReducer",
  initialState,
  reducers: {
    add: (state: any, { payload }) => {
      state.push({ text: payload, id: String(state.length) });
      localStorage.setItem("toDos", JSON.stringify(state));
    },
    remove: (state: any, { payload }) => {
      const deletedToDo = state.filter((toDo: ToDoType) => toDo.id !== payload);
      localStorage.setItem("toDos", JSON.stringify(deletedToDo));
      return deletedToDo;
    },
  },
  extraReducers: (builder) => {
    builder.addDefaultCase((state: any) => {
      return JSON.parse(state);
    });
  },
});

export const { add, remove } = toDos.actions;

const store = configureStore({ reducer: toDos.reducer });

export default store;
