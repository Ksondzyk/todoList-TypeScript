import React from "react";
import classNames from "classnames";
type TaskProps = {
  deleteTask: any;
  done: boolean;
  id: string;
  value: string;
  updateTask: any;
};
const Task: React.FC<TaskProps> = ({
  deleteTask,
  done,
  id,
  value,
  updateTask,
}) => {
  return (
    <li
      className={classNames("list-item", {
        "list-item_done": done,
      })}
    >
      <input
        defaultChecked={done}
        type="checkbox"
        className="list-item__checkbox"
        onChange={() => updateTask(id)}
      />
      <span className="list-item__text">{value}</span>
      <button
        onClick={() => deleteTask(id)}
        className="list-item__delete-btn"
      ></button>
    </li>
  );
};
export default Task;
