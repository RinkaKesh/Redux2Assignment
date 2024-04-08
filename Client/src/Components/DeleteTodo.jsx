
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/react';

const DeleteTodo = ({ id, onDelete }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
    onDelete(); 
  };

  return (
    <Button colorScheme="red" onClick={handleDelete}>Delete</Button>
  );
};

export default DeleteTodo;
