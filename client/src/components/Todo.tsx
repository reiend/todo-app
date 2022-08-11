import { useRef } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

import { getTodos, deleteTodo, updateTodo } from '../services/todo';

interface TodoProps {
  name: string;
  id: string;
  completed: boolean;
  setTodos: (todos) => void;
}

const Todo = ({ name, id, completed, setTodos }: TodoProps) => {
  const todoRef = useRef(null);

  const handleClick = async e => {
    await deleteTodo(todoRef.current.id);

    // update todos
    await getTodos()
      .then(res => {
        setTodos(res.data.todos);
      })
      .catch(() => {
        return <div>error</div>;
      });
  };

  const handleClickCompleted = async e => {
    await updateTodo(JSON.stringify({ name: name, completed: !completed }), id);

    // update todos
    await getTodos()
      .then(res => {
        setTodos(res.data.todos);
      })
      .catch(() => {
        return <div>error</div>;
      });
  };

  return (
    <li
      ref={todoRef}
      id={id}
      className='text-white flex justify-between text-2xl mb-5'
    >
      <div>
        <input
          type='checkbox'
          className={'mr-5 cursor-pointer'}
          id={`completed-${id}`}
          onChange={handleClickCompleted}
          checked={completed}
        />
        <label htmlFor={`completed-${id}`}>
          <span className={`${completed && 'text-purply-blue'} cursor-pointer`}>
            {name}
          </span>
        </label>
      </div>
      <FaTrashAlt
        onClick={handleClick}
        className='cursor-pointer hover:text-purply-blue'
      />
    </li>
  );
};

export default Todo;
