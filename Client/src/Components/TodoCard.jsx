
import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import DeleteTodo from './DeleteTodo';
import UpdateTodo from './UpdateTodo';

const TodoCard = ({ todo, onUpdate, onDelete }) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="md">
      <Text fontWeight="bold">Title: {todo.title}</Text>
      <Text>Status: {todo.completed ? 'Completed' : 'Incomplete'}</Text>
      <UpdateTodo id={todo.id} initialTitle={todo.title} onUpdate={onUpdate} />
      <DeleteTodo id={todo.id} onDelete={onDelete} />
    </Box>
  );
};

export default TodoCard;
