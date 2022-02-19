import { Route, Routes } from "react-router";
import TodoContainer from "./components/containers/TodoContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoContainer />} />
    </Routes>
  );
}

export default App;
