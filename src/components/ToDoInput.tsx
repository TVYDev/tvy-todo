import type { FC } from "react";
import "./ToDoInput.css";
import { FaArrowRight } from "react-icons/fa";

const ToDoInput: FC = () => {
  return (
    <section className="todo-input">
      <input
        type="text"
        className="text-todo"
        placeholder="🌱 What's your focus today?"
      />
      <button className="btn-save">
        <FaArrowRight className="icon" />
      </button>
    </section>
  );
};

export default ToDoInput;
