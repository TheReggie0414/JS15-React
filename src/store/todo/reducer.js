import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actions";

const addTodo = (state, action) => {
  return [...state, action.payload];
};

const deleteTodo = (state, action) => {
  return state.filter((todo) => todo.id !== action.payload);
};

const updateTodo = (state, action) => {
  return state.map((todo) =>
    todo.id === action.payload.id
      ? { ...todo, completed: action.payload.completed }
      : todo,
  );
};

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return addTodo(state, action);
    case DELETE_TODO:
      return deleteTodo(state, action);
    case UPDATE_TODO:
      return updateTodo(state, action);
    default:
      return state;
  }
};
