import * as gateWays from "./tasks.gateway";

import { tasksListSelector } from "./tasks.selectors";

export const TASKS_LIST_RECEIVED = "TASKS_LIST_RECEIVED";
export const FIND_TASKS_LIST = "FIND_TASKS_LIST";

export const tasksListReceived = (tasksList: []) => {
 
  return {
    type: TASKS_LIST_RECEIVED,
    payload: {
      tasksList,
    },
  };
};

export const getTasksList = () => {
  return function (dispatch: any) {
    gateWays.fetchTasksList().then((tasksList: any) => {
      return dispatch(tasksListReceived(tasksList));
    });
  };
};

export const createTask = (value: string) => {
  const newTask = {
    value,
    done: false,
  };
  return function (dispatch: any) {
    gateWays.createTask(newTask).then(() => dispatch(getTasksList()));
  };
};

export const updateTask = (taskId: string) => (
  dispatch: any,
  getState: any
) => {
  const state: any = getState();
  const tasksList = tasksListSelector(state);
  const task = tasksList.find((task: any) => task.id === taskId);
  const updatedtask = {
    ...task,
    done: !task.done,
  };
  gateWays.updateTask(taskId, updatedtask).then(() => dispatch(getTasksList()));
};

export const deleteTask = (taskId: string) => {
  return function (dispatch: any) {
    gateWays.deleteTask(taskId).then(() => dispatch(getTasksList()));
  };
};

export const findTasksList = (findValue: string) => {
  return {
    type: FIND_TASKS_LIST,
    findTask: findValue,
  };
};
