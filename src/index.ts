import { count } from "console";
import { Action, createStore, Store } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// Reducer
const countModifier = (state = 0, action: Action): number => {
  if (action.type === "ADD") {
    // add 1 to State when action is Add
    return state++;
  } else if (action.type === "MINUS") {
    // minus 1 to State when action is Minus
    return state--;
  }
  return state;
};

// Create Store
const countStore: Store = createStore(countModifier);

countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });

console.log(countStore.getState());
