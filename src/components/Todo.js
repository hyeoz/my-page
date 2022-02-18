import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      text: "",
      done: false,
    },
  ]);
  const [value, setValue] = useState("");

  const onChange = (e) => {
    // console.log(e);
    setValue(e.target.value);
  };
  const onInsert = (e) => {
    e.preventDefault();
    // console.log(e);
    const todoObj = {
      id: Date.now(),
      text: value,
      done: false,
    };
    if (todos[0].id === 0) {
      todos[0] = todoObj;
    } else {
      // console.log(todos);
      setTodos(todos.concat(todoObj));
    }
    // console.log(typeof todos);
    setValue("");
  };

  return (
    <div>
      <input onChange={onChange} value={value} />
      <button onClick={onInsert}>On Insert</button>
      {todos[0].id === 0 ? (
        <p>오늘은 할 일이 없습니다.</p>
      ) : (
        <ul>
          {todos.map((todo) => {
            return <li key={todo.id}>{todo.text}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Todo;
