import { applyMiddleware, createStore } from "redux";
import { wrapStore, alias } from "react-chrome-redux";
import reducer from "./reducers";

const store = createStore(reducer, loadState());

store.subscribe(
  throttle(() => {
    saveState({
      bookmark: store.getState().bookmark,
      settings: store.getState().settings,
      animation: store.getState().animation
    });
  }),
  1000
);

wrapStore(store, {
  portName: "COUNTING"
});

export default store;
