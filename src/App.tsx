import React from "react";
import TodoList from "./components/tasks/TodoList";
import { Provider } from "react-redux";
import store from "./store";

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <TodoList />
      </Provider>
    </>
  );
};

export default App;
