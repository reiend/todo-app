import Todo from './Todo';

type TodoType = {
  name: string;
  _id: string;
  completed: boolean;
};

interface TodoList {
  todos: TodoType[];
  setTodos: (todos) => void;
}

const TodoList = ({ todos, setTodos }: TodoList) => {
  return (
    <ul className={'mt-40'}>
      {todos.map(todo => {
        return (
          <Todo
            key={todo._id}
            name={todo.name}
            id={todo._id}
            completed={todo.completed}
            setTodos={setTodos}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
