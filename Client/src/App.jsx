
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './Components/Theme'; 
import Todo from './Components/Todo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Todo />
    </ChakraProvider>
  );
}

export default App;
