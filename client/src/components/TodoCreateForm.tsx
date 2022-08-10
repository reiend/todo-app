import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

import { IoIosCreate } from 'react-icons/io';

interface TodoFormInputProps {
  name: string;
}

const TodoSchema = object({
  name: string().max(128).required('please provide a name')
});

const TodoCreateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TodoFormInputProps>({
    resolver: yupResolver(TodoSchema)
  });

  const onSubmit = () => {
    console.log('submit');
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
