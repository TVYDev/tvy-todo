import type { FC } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import "./ToDoItem.css";

interface IToDoItemProps {
  completed?: boolean;
}

const ToDoItem: FC<IToDoItemProps> = ({ completed }) => {
  let classNames = "todo-item ";
  classNames += completed ? "completed" : "";
  return (
    <div className={classNames}>
      <button className="btn-complete">
        <FaCheck />
      </button>
      <div className="task-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing
      </div>
      <button className="btn-delete">
        <FaTrash />
      </button>
    </div>
  );
};

export default ToDoItem;
