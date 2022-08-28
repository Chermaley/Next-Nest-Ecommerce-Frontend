import reducers from "./reducers";
import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import chatMiddleware from "./middlewares/chatMiddleware";

const appReducer = combineReducers({
  ...reducers,
});

const reducer: Reducer = (state, action) => {
  if (action.type === "auth/logout") {
    state = undefined;
  }
  return appReducer(state, action);
};

export const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([chatMiddleware]),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<typeof appReducer>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore);
