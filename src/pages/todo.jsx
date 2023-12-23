import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  useTodoSelector,
  addTodo,
  markTodo,
  deleteTodo,
} from "../store/todoSlice";

export const Todo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const todoList = useTodoSelector();

  const onCreateTodo = () => {
    const id = uuidv4();
    dispatch(addTodo({ id, value, completed: false }));
    setValue("");
  };

  const onMarkTodo = (id) => (e) => {
    dispatch(markTodo({ id: id, completed: e.target.checked }));
  };

  const onDeleteTodo = (id) => () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={onCreateTodo}>Add Todo</button>
      <ul>
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.value}
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={onMarkTodo(todo.id)}
              />
              <button onClick={onDeleteTodo(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
