import { useState, useEffect } from 'react';
import { getTodos } from '../../services/todo';

import TodoCreateForm from './TodoCreateForm';
import TodoList from './TodoList';
import Spinner from '../Spinner';

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      await getTodos()
        .then(res => {
          setTodos(res.data.todos);
          setIsLoaded(true);
        })
        .catch(() => {
          return <div>error</div>;
        });
    }, 1500);
  }, [todos.length]);

  return (
    <>
      <TodoCreateForm setTodos={setTodos} />
      {isLoaded ? <TodoList todos={todos} setTodos={setTodos} /> : <Spinner />}
    </>
  );
};

export default TodoContainer;
