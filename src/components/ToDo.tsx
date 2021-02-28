import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ToDoType } from "../react-app-env";
import { actionCreators } from "../store";

const ToDo = ({ text, onBtnClick, id }: any) => {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch: Function, { id }: ToDoType) => {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
