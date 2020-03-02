import React from 'react';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { productsReducer } from "./reducers";

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer);

export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
