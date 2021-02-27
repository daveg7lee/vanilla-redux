import { AnyAction, createStore, Reducer, Store } from "redux";

const form = document.querySelector("form");
const input: any = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer: Reducer = (state = [], { type, text }: AnyAction) => {
  console.log(type, text);
  switch (type) {
    case ADD_TODO:
      return [];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store: Store = createStore(reducer);

const onSubmit = (e: Event) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, text: toDo });
};

form?.addEventListener("submit", onSubmit);

export {};
