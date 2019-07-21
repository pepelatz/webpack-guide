import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchTodos } from '../store/actions';

// eslint-disable-next-line no-shadow
const Todo = ({ fetchTodos, todos }) => {
  useEffect(() => {
    fetchTodos();
  });

  return (
    <div>
      <h1>Todo</h1>
      <Link to="/">Home</Link>
      <br />
      {/* <button type="button" onClick={() => fetchTodos()}>
        Get Todos
      </button> */}
      <br />
      {todos.map(todo => (
        <p key={todo.id}>
          {todo.id} {todo.title}
        </p>
      ))}
    </div>
  );
};

const loadData = (store, param) => {
  return store.dispatch(fetchTodos(param));
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = { fetchTodos };

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(Todo),
  loadData
};
