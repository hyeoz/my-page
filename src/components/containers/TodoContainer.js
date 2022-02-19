import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insert, remove, toggle } from "../../modules/todos";
import Todos from "../Todos";

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
    <Todos
      todos={todos}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default React.memo(TodoContainer); // 성능 최적화를 위해 memo 사용
