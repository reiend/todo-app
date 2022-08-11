import { useState, useEffect } from 'react';
import { getTodos } from '../../services/todo';

import TodoCreateForm from './TodoCreateForm';
import TodoList from './TodoList';

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTimeout(async () => {
      await getTodos()
        .then(res => {
          setTodos(res.data.todos);
        })
        .catch(() => {
          return <div>error</div>;
        });
    }, 1500);
  }, [todos.length]);

  return (
    <>
      <TodoCreateForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default TodoContainer;
