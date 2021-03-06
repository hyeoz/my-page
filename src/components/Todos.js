import { useState } from "react";
import styled from "styled-components";

const ItemWrapper = styled.div`
  position: absolute;
`;

const TodoItems = ({ todo, onToggle, onRemove }) => {
  // console.log(todo, "todo items");
  localStorage.setItem(
    // todo 저장
    todo.id,
    JSON.stringify({ text: todo.text, done: todo.done })
  );

  return (
    <div>
      <input
        type="checkbox"
        onClick={() => {
          onToggle(todo.id);
          localStorage.removeItem(todo.id);
          localStorage.setItem(
            todo.id,
            JSON.stringify({ text: todo.text, done: !todo.done })
          );
        }}
        checked={todo.done}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button
        onClick={() => {
          onRemove(todo.id);
          localStorage.removeItem(todo.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

const Todos = ({ todos, onInsert, onToggle, onRemove }) => {
  const [value, setValue] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    onInsert(value);
    setValue("");
  };
  const onChangeInput = (e) => {
    setValue(e.target.value);
  };
  const getAllTodos = () => {
    // local 에서 저장된 항목 가져오기
    let dummy = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;
    while (i--) {
      dummy.push({
        id: keys[i],
        body: localStorage.getItem(keys[i]),
      });
    }
    return dummy;
  };
  // console.log(getAllTodos());
  const todoDummy = getAllTodos();
  let todoLocal = [];
  todoDummy.map((d) => {
    // console.log(JSON.parse(d.body), "parsing data");

    const item = {
      id: d.id,
      text: JSON.parse(d.body).text,
      done: JSON.parse(d.body).done,
    };
    todoLocal.push(item);
    if (Date.now() - d.id > 86400000) {
      // 24시간 지나면 삭제되게
      localStorage.removeItem(d.id);
    }
    // console.log(typeof JSON.parse(d.body).done);
    if (JSON.parse(d.body).done == true) {
      // 끝났으면 지우기
      localStorage.removeItem(d.id);
    }
  });
  // console.log(todoLocal, "todo local");

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
          <p>Please write something you need to do!</p>
        )}
      </div>
      <div>
        {todoLocal.length !== 0 ? (
          <div>
            <h2>There are few things Remain...</h2>
            {todoLocal.map((todo) => (
              <TodoItems
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onRemove={onRemove}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Todos;
