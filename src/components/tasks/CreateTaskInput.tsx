import React, { useState } from "react";
import { connect } from "react-redux";
import * as tasksActions from "../task.action";
type TodoListProps = {
  createTask: any;
  findTask: any;
};

const CreateTaskInput: React.FC<TodoListProps> = ({ createTask, findTask }) => {
  const [state, setState] = useState({ value: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      value: event.target.value,
    });
  };
  findTask(state);

  const onTaskCreate = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    createTask(state.value);
    setState({
      value: "",
    });
  };
  return (
    <div className="create-task">
      <input
        value={state.value}
        onChange={handleChange}
        className="create-task__input"
        type="text"
      />
      <button onClick={onTaskCreate} className="btn create-task__btn">
        Create
      </button>
    </div>
  );
};

const mapDispatch = {
  createTask: tasksActions.createTask,
  findTask: tasksActions.findTasksList,
};

export default connect(null, mapDispatch)(CreateTaskInput);
