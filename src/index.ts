import { AnyAction, createStore, Reducer, Store } from "redux";
import { ToDo } from "./react-app-env";

const form = document.querySelector("form");
const input: any = document.querySelector("input");
const ul: any = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text: string, id: string) => {
  return { type: ADD_TODO, text, id };
};

const deleteToDo = (id: string) => {
  return { type: DELETE_TODO, id };
};

const reducer: Reducer = (state = [], { type, text, id }: AnyAction) => {
  switch (type) {
    case ADD_TODO:
      return [{ text, id }, ...state];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store: Store = createStore(reducer);

const dispatchDeleteToDo = (e: any) => {
  const id = e.target.parentNode.id;
  store.dispatch(deleteToDo(id));
};

const dispatchAddToDo = (text: string, id: string) => {
  store.dispatch(addToDo(text, id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo: ToDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul?.appendChild(li);
  });
};

store.subscribe(paintToDos);

const onSubmit = (e: Event) => {
  e.preventDefault();
  const toDo = input.value;
  const id = store.getState().length;
  input.value = "";
  dispatchAddToDo(toDo, id);
};

form?.addEventListener("submit", onSubmit);

export {};
