import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getTodos, createTodo } from '../services/todo';
import { IoIosCreate } from 'react-icons/io';

import TodoSchema from '../schemas/TodoSchema';

interface TodoFormInputProps {
  name: string;
}

interface TodoCreateFormProps {
  setTodos: (todos) => void;
}

const TodoCreateForm = ({ setTodos }: TodoCreateFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TodoFormInputProps>({
    resolver: yupResolver(TodoSchema)
  });

  const onSubmit = async (data, e) => {
    await createTodo(JSON.stringify(data));

    // update todos
    await getTodos()
      .then(res => {
        setTodos(res.data.todos);

        // reset input
        e.target.reset();
      })
      .catch(() => {
        return <div>error</div>;
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('name')}
        name='name'
        id='name'
        type='text'
        placeholder='e.g. watering the plants'
        className='w-full rounded-sm p-4 text-2xl mb-5'
      />
      <button
        type='submit'
        className='text-bleach-cedar border-white p-2 rounded-sm float-right clear-both bg-white text-lg'
      >
        <IoIosCreate className={'inline'} /> create todo
      </button>
      {errors.name?.message && (
        <div className='text-purply-blue'>{errors.name.message}</div>
      )}
    </form>
  );
};

export default TodoCreateForm;
