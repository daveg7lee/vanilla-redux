import React, { useState } from "react";
import { connect } from "react-redux";
import { ToDo } from "../react-app-env";

const Home = ({ toDos }: any) => {
  const [text, setText] = useState("");
  const onChange = (e: any) => {
    setText(e.target.value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    setText("");
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add To Do</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
};

const mapStateToProps = (state: Array<ToDo>) => {
  return { toDos: state };
};

export default connect(mapStateToProps)(Home);
