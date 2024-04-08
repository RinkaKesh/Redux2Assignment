
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Input, Button } from '@chakra-ui/react';
import { updateTodo } from '../Redux/Todo/action';

const UpdateTodo = ({ id, initialTitle, onUpdate }) => {
  const [title, setTitle] = useState(initialTitle);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(updateTodo(id, { title }));
    onUpdate(); 
  };

  return (
    <Box p={4}>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter updated title"
      />
      <Button mt={2} colorScheme="blue" onClick={handleSubmit}>Update</Button>
    </Box>
  );
};

export default UpdateTodo;