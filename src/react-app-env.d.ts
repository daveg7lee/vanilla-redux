/// <reference types="react-scripts" />

import { type } from "os";

export type ToDoType = {
  text: string;
  id: string;
};

export type reducerProps = {
  type: string;
  payload: string;
};
