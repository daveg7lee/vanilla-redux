import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { ToDoType } from "../react-app-env";
import { actionCreators } from "../store";

const Home = ({ toDos, addToDo }: any) => {
  const [text, setText] = useState<string>("");
  const onChange = (e: any) => {
    setText(e.target.value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    addToDo(text);
    setText("");
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add To Do</button>
      </form>
      <ul>
        {toDos.map((toDo: ToDoType) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state: Array<ToDoType>) => {
  return { toDos: state };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    addToDo: (text: string) => dispatch(actionCreators.addToDo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
