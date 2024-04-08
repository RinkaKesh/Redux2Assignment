// Todo.jsx
import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import AddTodo from './AddTodo'; 
import DeleteTodo from './DeleteTodo';
import UpdateTodo from './UpdateTodo';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../Redux/Todo/action';

const Todo = ({ todos }) => { 
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdate = (id, updatedTitle) => {
    dispatch(updateTodo(id, updatedTitle));
  };

  return (
    <div>
      {todos.map(todo => (
        <Box key={todo.id} p={4} borderWidth="1px" borderRadius="md">
          <Text fontWeight="bold">Title: {todo.title}</Text>
          <Text>Status: {todo.completed ? 'Completed' : 'Incomplete'}</Text>
          <UpdateTodo id={todo.id} initialTitle={todo.title} onUpdate={handleUpdate} />
          <DeleteTodo id={todo.id} onDelete={handleDelete} />
        </Box>
      ))}
      <AddTodo /> 
    </div>
  );
};

export default Todo;
