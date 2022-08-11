import axios from 'axios';

const getTodos = async () => {
  return await axios({
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    url: `${process.env.BASE_URL}todos`
  });
};

const createTodo = async data => {
  return await axios({
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data,
    url: `${process.env.BASE_URL}todos`
  });
};

const deleteTodo = async id => {
  return await axios({
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    url: `${process.env.BASE_URL}todos/${id}`
  });
};

const updateTodo = async (data, id) => {
  return await axios({
    method: 'patch',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data,
    url: `${process.env.BASE_URL}todos/${id}`
  });
};

export { getTodos, createTodo, deleteTodo, updateTodo };
