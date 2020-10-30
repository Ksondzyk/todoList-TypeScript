import React, {useEffect, memo } from "react";
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
  find: {};

};

const TaskList: React.FC<TaskListProps> = ({
  deleteTask,
  updateTask,
  find,
  tasksList,
  getTasksList,
}) => {
  const filtered = useTasyListLogic( 
  tasksList,
    getTasksList, find)
  
  return (
    <ul className="list">
      {filtered
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

const useTasyListLogic = (tasksList:[], getTasksList:any,find:any) => {
     useEffect(() => {
      getTasksList();
     }, []);
  
  const filterList = tasksList.filter(({ value }: any) => value.includes(find.value))
  return filterList
}

const mapState = (state: string) => {
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

export default connect(mapState, mapDispatch)(memo(TaskList))