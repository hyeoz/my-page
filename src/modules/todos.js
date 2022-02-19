import { createAction, handleActions } from "redux-actions";

const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/DELETE";

export const insert = createAction(INSERT, (text) => ({
  id: Date.now(),
  text,
  done: false,
}));
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

const initialState = {
  todos: [],
};

const todos = handleActions(
  {
    [INSERT]: (state, action) => {
      // console.log(state, "handle action");
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };
    },
    [TOGGLE]: (state, action) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      ),
    }),
    [REMOVE]: (state, action) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== action.payload),
    }),
  },
  initialState
);

export default todos;
