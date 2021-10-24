import type { FC } from "react";
import ToDoItem from "./ToDoItem";
import "./ToDoList.css";

const ToDoList: FC = () => {
  return (
    <section className="todo-list">
      <ToDoItem />
      <ToDoItem completed />
      <ToDoItem />
      <ToDoItem />
    </section>
  );
};

export default ToDoList;
