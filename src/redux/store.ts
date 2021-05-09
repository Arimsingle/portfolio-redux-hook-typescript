import thunkMiddleware from "redux-thunk";
import { rootReducer } from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export type stateReduxType = ReturnType<typeof rootReducer>;
export const configureStore = () => {
  const logger = (store: any) => (next: any) => (action: any) => {
    console.group(action.type);
    console.log("current state", store.getState());
    console.log("dispatching", action);
    const result = next(action);
    console.log("next state", store.getState());
    return result;
  };
  const middlewares = [thunkMiddleware, logger];
  console.log(middlewares);

  const middleWareEnhancer = applyMiddleware(...middlewares);
  return createStore(rootReducer, composeEnhancers(middleWareEnhancer));
};
