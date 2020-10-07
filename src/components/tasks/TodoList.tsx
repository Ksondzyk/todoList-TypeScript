import React from "react";
import CreateTaskInput from "./CreateTaskInput";
import TaskList from "./TaskList";

const TodoList: React.FC = () => {
  return (
    <>
      <h1 className="title">Todo List</h1>
      <main className="todo-list">
        <CreateTaskInput />
        <TaskList />
      </main>
    </>
  );
};
export default TodoList;
