import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { insert, remove, toggle } from "../../modules/todos";
import Navigator from "../Navigator";
import Todos from "../Todos";

const TodoWrapper = styled.div`
  text-align: center;
  font-family: "Gowun Dodum", sans-serif;
  button {
    background: #f0e6fa;
    margin-left: 0.1rem;
    font-family: "Patua One", cursive;
  }
  input {
    margin-bottom: 10px;
  }
`;

const TodoContainer = () => {
  const { todos } = useSelector(({ todos }) => ({
    todos: todos.todos,
  }));
  // console.log(todos, "todo container");

  const dispatch = useDispatch();
  const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

  return (
    <TodoWrapper>
      <Navigator />
      <Todos
        todos={todos}
        onInsert={onInsert}
        onToggle={onToggle}
        onRemove={onRemove}
      />
    </TodoWrapper>
  );
};

export default React.memo(TodoContainer); // 성능 최적화를 위해 memo 사용
