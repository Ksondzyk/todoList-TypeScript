import { createSelector } from "reselect";

export const tasksListSelector = (state: any) => state.tasks.tasksList;

export const sortedTasksListSelector = createSelector(
  [tasksListSelector],
  (tasksList) => tasksList.slice().sort((a: any, b: any) => a.done - b.done)
);
export const findTasksListSelector = (state: any) => state.find;
