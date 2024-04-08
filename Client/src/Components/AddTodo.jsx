
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Input, Button } from '@chakra-ui/react';
import { addTodo } from '../Redux/Todo/action';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (title.trim() !== '') {
      const newTodo = {
        id:Date.now(),
        title: title,
        completed: false
      };
      dispatch(addTodo(newTodo));
      setTitle('');
    } else {
      alert('Please fill the title field.');
    }
  };

  return (
    <Box p={4}>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo title"
      />
      <Button mt={2} colorScheme="teal" onClick={handleSubmit}>
        Add Todo
      </Button>
    </Box>
  );
};

export default AddTodo;
