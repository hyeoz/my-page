import { Route, Routes } from "react-router";
import Todo from "./components/Todo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Todo />} />
    </Routes>
  );
}

export default App;
