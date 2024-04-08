import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import todosReducer from './Todo/reducer';
import themeReducer from './Theme/reducer'; 

const rootReducer = combineReducers({
  todos: todosReducer,
//   theme: themeReducer, 
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
