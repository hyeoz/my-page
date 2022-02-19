import { useState } from "react";

const TodoItems = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>Delete</button>
    </div>
  );
};

const Todos = ({ todos, onInsert, onToggle, onRemove }) => {
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(value);
    setValue("");
  };
  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChangeInput} value={value} />
        <button type="submit">Add</button>
      </form>
      <div>
        {todos.length !== 0 ? (
          todos.map((todo) => (
            <TodoItems
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onRemove={onRemove}
            />
          ))
        ) : (
          <p>오늘은 할 일이 없네요!</p>
        )}
      </div>
    </div>
  );
};

export default Todos;
