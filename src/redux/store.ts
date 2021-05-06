import thunkMiddleware from "redux-thunk";
import { rootReducer } from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export type AppState = ReturnType<typeof rootReducer>;
export const configureStore = () => {
  const middlewares = [thunkMiddleware];
  console.log(middlewares);
  
  const middleWareEnhancer = applyMiddleware(...middlewares);
  return createStore(rootReducer, composeEnhancers(middleWareEnhancer));
};