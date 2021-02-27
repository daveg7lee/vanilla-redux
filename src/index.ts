import { Action, createStore, Store } from "redux";

const add: HTMLElement | null = document.getElementById("add");
const minus: HTMLElement | null = document.getElementById("minus");
const number: any = document.querySelector("span");

// Reducer
const countModifier = (state = 0, action: Action): number => {
  if (action.type === "ADD") {
    // add 1 to State when action is Add
    state++;
  } else if (action.type === "MINUS") {
    // minus 1 to State when action is Minus
    state--;
  }
  return state;
};

// Create Store
const countStore: Store = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

// add 1 when button is clicked
add?.addEventListener("click", () => {
  countStore.dispatch({ type: "ADD" });
});

// minus 1 when button is clicked
minus?.addEventListener("click", () => {
  countStore.dispatch({ type: "MINUS" });
});
