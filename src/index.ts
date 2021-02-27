import { Action, createStore, Store } from "redux";

const add: HTMLElement | null = document.getElementById("add");
const minus: HTMLElement | null = document.getElementById("minus");
const number: any = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

// Reducer
const countModifier = (state = 0, { type }: Action): number => {
  switch (type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
};

// Create Store
const countStore: Store = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

// add 1 when button is clicked
add?.addEventListener("click", () => {
  countStore.dispatch({ type: ADD });
});

// minus 1 when button is clicked
minus?.addEventListener("click", () => {
  countStore.dispatch({ type: MINUS });
});
