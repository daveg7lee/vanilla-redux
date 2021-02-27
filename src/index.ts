import { createStore, Store } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// Reducer
const countModifier = (state = 0): number => {
  return state;
};

// Create Store
const countStore: Store = createStore(countModifier);

countStore.getState();
