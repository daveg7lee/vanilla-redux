import React from "react";
import { connect } from "react-redux";
import { ToDoType } from "../react-app-env";

const Detail = ({ toDo }: any) => {
  return <h1>{toDo?.text}</h1>;
};

const mapStateToProps = (state: Array<ToDoType>, ownProps: any) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === id) };
};

export default connect(mapStateToProps)(Detail);
