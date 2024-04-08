
import axios from 'axios';
import { ADD_TODO, UPDATE_TODO, DELETE_TODO ,FETCH_TODOS} from './actionTypes';

export const addTodo = (title) => async (dispatch) => {
  try {
    const response = await axios.post('/todos', { title, completed: false });
    dispatch({ type: ADD_TODO, payload: response.data });
  } catch (error) {
    console.error('Error adding todo:', error);
  }
};

export const updateTodo = (id, updatedTodo) => async (dispatch) => {
  try {
    const response = await axios.patch(`/todos/${id}`, updatedTodo);
    dispatch({ type: UPDATE_TODO, payload: response.data });
  } catch (error) {
    console.error('Error updating todo:', error);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await axios.delete(`/todos/${id}`);
    dispatch({ type: DELETE_TODO, payload: id });
  } catch (error) {
    console.error('Error deleting todo:', error);
  }
};

export const fetchTodos = () => async (dispatch) => {
  try {
    const response = await axios.get('/todos');
    dispatch({ type: FETCH_TODOS, payload: response.data });
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};
