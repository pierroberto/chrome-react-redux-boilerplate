import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Store } from "react-chrome-redux";
import App from "./App";
//import reducers from '../background/reducers';

const store = new Store({
  portName: "PORT"
});

store.ready().then(() => {
  const mountNode = document.createElement("div");
  document.body.appendChild(mountNode);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    mountNode
  );
});
