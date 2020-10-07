import React, { useEffect } from "react";
import Task from "./Task";
import { connect } from "react-redux";
import {
  sortedTasksListSelector,
  findTasksListSelector,
} from "../tasks.selectors";
import * as tasksActions from "../task.action";
type TaskListProps = {
  tasksList: [];
  deleteTask: any;
  updateTask: any;
  getTasksList: any;
  find: any;
};
const TaskList: React.FC<TaskListProps> = ({
  tasksList,
  getTasksList,
  deleteTask,
  updateTask,
  find,
}) => {
  useEffect(() => {
    getTasksList();
  }, [find.value]);
  return (
    <ul className="list">
      {tasksList
        .filter(({ value }: any) => value.includes(find.value))
        .map((task: any) => (
          <Task
            key={task.id}
            {...task}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))}
    </ul>
  );
};
const mapState = (state: Object | string) => {
  return {
    tasksList: sortedTasksListSelector(state),
    find: findTasksListSelector(state),
  };
};

const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
  deleteTask: tasksActions.deleteTask,
  updateTask: tasksActions.updateTask,
};

export default connect(mapState, mapDispatch)(TaskList);
