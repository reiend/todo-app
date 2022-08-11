import { object, string } from 'yup';

const TodoSchema = object({
  name: string().max(128).required('please provide a name')
});

export default TodoSchema;
