import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from "../../(dashboard)/user/slice";

export const makeStore = () => {
  const store = configureStore({
    reducer: { userReducer },
    middleware: (getNamedMiddleware) => getNamedMiddleware().concat(),
  });
  setupListeners(store.dispatch);

  return store;
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
