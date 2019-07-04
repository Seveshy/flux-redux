import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

const Todolist = props => (
  <ul>
    {props.todos.map(todo => (
      <li key={todo.id}> {todo.text} </li>
    ))}
  </ul>
);

Todolist.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string
    })
  ).isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(Todolist);
