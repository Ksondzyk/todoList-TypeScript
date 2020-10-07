import { TASKS_LIST_RECEIVED, FIND_TASKS_LIST } from "./task.action";

const initialState: {} = {
  tasksList: [],
};

export const tasksReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TASKS_LIST_RECEIVED:
      return {
        ...state,
        tasksList: action.payload.tasksList,
      };
    default:
      return state;
  }
};
export const tasksFind = (state: string = "", action: any) => {
  switch (action.type) {
    case FIND_TASKS_LIST: {
      return action.findTask;
    }
    default:
      return state;
  }
};
