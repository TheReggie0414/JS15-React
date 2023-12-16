import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addTodo, deleteTodo, changeTodo } from "../store/todo/actions";
import { useTodoSelector } from "../store/todo/selectors";

export const Home = () => {
  const [value, setValue] = useState("");
  const todoList = useTodoSelector();
  const dispatch = useDispatch();

  const onClick = () => {
    const action = addTodo({ id: uuidv4(), value, completed: false });
    dispatch(action);
  };

  const onDelete = (id) => () => {
    dispatch(deleteTodo(id));
  };

  const onUpdate = (id) => (e) => {
    dispatch(changeTodo(id, e.target.checked));
  };

  return (
    <section>
      <h1>Home</h1>
      <Link to="/setting">Settings</Link>
      <br />
      <br />
      <br />
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={onClick}>Add</button>
      <div>
        {todoList.map((todo) => (
          <div key={todo.id}>
            {todo.value}
            <input
              type="checkbox"
              defaultChecked={todo.completed}
              onChange={onUpdate(todo.id)}
            />
            <button onClick={onDelete(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </section>
  );
};
