import "./App.css";
import Divider from "./components/Divider";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <main>
      <h1 className="page-title">TVY's ToDo</h1>
      <ToDoInput />
      <Divider />
      <ToDoList />
    </main>
  );
}

export default App;
