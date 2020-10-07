import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunc from "redux-thunk";
import { tasksReducer, tasksFind } from "./components/tasks.reducer";

const reducer = combineReducers({
  tasks: tasksReducer,
  find: tasksFind,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunc));

const store = createStore(reducer, enhancer);
export default store;
