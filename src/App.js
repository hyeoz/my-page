import { Route, Routes } from "react-router";
import NewsContainer from "./components/containers/NewsContainer";
import TodoContainer from "./components/containers/TodoContainer";
import Main from "./components/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/todo" element={<TodoContainer />} />
      <Route path="/news/*" element={<NewsContainer />} />
      <Route path="/news/:category" element={<NewsContainer />} />
    </Routes>
  );
}

export default App;
